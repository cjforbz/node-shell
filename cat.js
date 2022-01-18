const fs = require("fs");

module.exports = function (fileName) {
  let fileArr = fileName.split(" ");
  fs.readFile(fileArr[1], (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  });
};
