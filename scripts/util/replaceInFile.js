let fs = require("fs");

module.exports = function (fileName, text, replacement) {
    let data = fs.readFileSync(fileName, "utf8");
    let result = data.split(text).join(replacement);

    fs.writeFileSync(fileName, result, "utf8");
};