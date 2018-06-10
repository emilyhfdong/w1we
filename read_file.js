var fs = require("fs");
var file = process.argv[2];
var buf = new Buffer(1024);

fs.open(file, 'r+', function(err, fd){
  if (err) {
    return console.error(err);
  }
  console.log("file opened sucessfully");
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    if (err) {
      return console.error(err);
    }
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }

  })
})
