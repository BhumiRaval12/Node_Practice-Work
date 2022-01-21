var fs = require('fs');

fs.writeFile('demo.txt', 'Hello...Node.js is an open source server environment.', function (err) {
     if (err) throw err;
     console.log('Saved!');
});

fs.readFile('demo.txt', 'utf8', function (err, data) {
     console.log(data);
});

fs.appendFile('demo.txt', ' ....This is appended text.', function (err) {
     if (err) throw err;
     console.log('Updated!');
});

fs.readFile('demo.txt', 'utf8', function (err, data) {
     console.log(data);
});

fs.rename('demo.txt', 'final-demo.txt', function (err) {
     if (err) throw err;
     console.log('File Renamed!');
});


// fs.unlink('demo.txt', function (err) {
//      if (err) throw err;
//      console.log('File deleted!');
// });

