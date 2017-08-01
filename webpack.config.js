var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"), // generates an absolute path of the given relative path directory
    filename: "App.js"
  }
}
