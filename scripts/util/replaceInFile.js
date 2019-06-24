let fs = require("fs");

module.exports = function (fileName, text, replacement) {
    fs.readFile(fileName, "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        let result = data.replace(new RegExp(text), replacement);

        fs.writeFile(fileName, result, "utf8", function (err) {
            if (err) return console.log(err);
        });
    });
};