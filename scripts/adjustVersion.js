const pkg = require("../docs/package");
const replaceInFile = require("./util/replaceInFile");
const semverRegEx = require("./util/semverRegEx");


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
        replaceInFile(__dirname + "/../README.md", oldUrl, newUrl);

        console.log("Adjusting package.json");
        replaceInFile(__dirname + "/../docs/package.json", `"version": "${oldVersion}"`, `"version": "${newVersion}"`);

        console.log("Adjusting examples");
        replaceInFile(__dirname + "/../examples/example.xml", oldUrl, newUrl);
        replaceInFile(__dirname + "/../examples/siliziumkugel.xml", oldUrl, newUrl);

        console.log("Adjusting examples");
        replaceInFile(__dirname + "/../dcc.xsd", `version="${oldVersion}"`, `version="${newVersion}"`);
    } else {
        console.log("Please pass a valid version number");
    }
}