const path = require("path");
const fs = require("fs");

module.exports = function (dir, ext) {
    let files = fs.readdirSync(dir);
    let result = [];

    for (let file of files) {
        let filePath = path.join(dir, file);

        if (!fs.statSync(filePath).isDirectory()) {
            if (file.substr(-1 * (ext.length + 1)) === "." + ext) {
                result.push(filePath)
            }
        }
    }

    return result;
};