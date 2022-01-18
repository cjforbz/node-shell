const request = require("request");
const done = require("./bash");

module.exports = function (url) {
  request(url, function (error, response, body) {
    if (error) throw error;
    if (response && response.stausCode)
      process.stdout.write(`statusCode: ${response.statusCode}`);
    process.stdout.write(body);
    process.stdout.write("\nprompt > ");
  });
};
