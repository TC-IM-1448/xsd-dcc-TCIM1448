const pkg = require("../docs/package");
const replaceInFile = require("./util/replaceInFile");
const semverRegEx = require("./util/semverRegEx");
const filesByExtension = require("./util/filesByExtension");


if(process.argv.length > 2) {
    let newVersion = process.argv[2];
    if(semverRegEx().test(newVersion)) {
        if(newVersion.startsWith("v")) {
            newVersion = newVersion.substring(1);
        }
        let oldVersion = pkg.version;

        console.log(`Changing version from ${oldVersion} to ${newVersion}`);

        let oldUrl = `https://ptb.de/dcc/v${oldVersion}/`;
        let newUrl = `https://ptb.de/dcc/v${newVersion}/`;

        console.log(`Using URL ${newUrl}`);

        console.log("Adjusting README.md");
        const readMe = __dirname + "/../README.md";
        replaceInFile(readMe, oldUrl, newUrl);
        replaceInFile(readMe, `schemaVersion="${oldVersion}"`, `schemaVersion="${newVersion}"`);

        console.log("Adjusting package.json");
        replaceInFile(__dirname + "/../docs/package.json", `"version": "${oldVersion}"`, `"version": "${newVersion}"`);

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
        replaceInFile(schemaPath, `<xs:pattern value="${oldVersion}"/>`, `<xs:pattern value="${newVersion}"/>`);
    } else {
        console.log("Please pass a valid version number that complies to the semantic version specification");
    }
} else {
    console.log("Usage: node path/to/adjustVersion.js <newVersion>");
}
