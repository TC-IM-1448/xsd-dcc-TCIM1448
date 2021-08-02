/*
* This script changes the version number in various places.
* Usage: node path/to/adjustVersion.js <oldVersion> <newVersion>
* */

const replaceInFile = require("./util/replaceInFile");
const semverRegEx = require("./util/semverRegEx");
const filesByExtension = require("./util/filesByExtension");

// https://stackoverflow.com/a/6969486
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

if(process.argv.length > 3) {
    let oldVersion = process.argv[2];
    let newVersion = process.argv[3];
    if(semverRegEx().test(newVersion)) {
        if(newVersion.startsWith("v")) {
            newVersion = newVersion.substring(1);
        }
        if(oldVersion.startsWith("v")) {
            oldVersion = oldVersion.substring(1);
        }

        console.log(`Changing version from ${oldVersion} to ${newVersion}`);

        let oldUrl = `https://ptb.de/dcc/v${oldVersion}/`;
        let newUrl = `https://ptb.de/dcc/v${newVersion}/`;

        console.log(`Using URL ${newUrl}`);

        console.log("Adjusting README.md");
        const readMe = __dirname + "/../README.md";
        replaceInFile(readMe, oldUrl, newUrl);
        replaceInFile(readMe, `schemaVersion="${oldVersion}"`, `schemaVersion="${newVersion}"`);

        console.log("Adjusting examples");
        let examples = filesByExtension(__dirname + "/../examples", "xml");
        for (let example of examples) {
            replaceInFile(example, oldUrl, newUrl);
            replaceInFile(example, `schemaVersion="${oldVersion}"`, `schemaVersion="${newVersion}"`);
        }

        console.log("Adjusting schema");
        let schemaPath = __dirname + "/../dcc.xsd";
        replaceInFile(schemaPath, oldUrl, newUrl);
        replaceInFile(schemaPath, `version="${oldVersion}"`, `version="${newVersion}"`);
        replaceInFile(schemaPath, `<xs:pattern value="${escapeRegExp(oldVersion)}"/>`, `<xs:pattern value="${escapeRegExp(newVersion)}"/>`);
    } else {
        console.log("Please pass a valid version number that complies to the semantic version specification");
    }
} else {
    console.log("Usage: node path/to/adjustVersion.js <oldVersion> <newVersion>");
}
