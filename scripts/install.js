// var OS=require('os');
// console.log(OS.platform());
var tar=require("tar");
var fs = require("fs");

function onError(err) {
  console.error('An error occurred:', err)
}

function onEnd() {
  console.log('Extracted!')
}
var extractor = tar.Extract({path: __dirname + "/../"})
  .on('error', onError)
  .on('end', onEnd);

fs.createReadStream(__dirname + "/../node_modules.tar")
  .on('error', onError)
  .pipe(extractor);