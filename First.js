console.log("hii iam node");
let path = require("path");
let os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
