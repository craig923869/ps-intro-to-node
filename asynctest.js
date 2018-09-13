var fs = require('fs');
/*  w ww .ja v a2s.c  om*/

fs.open(
     'app.js', 'r',
      function  (err, handle) {
         var buf = new Buffer(1000);
         fs.read(
             handle, buf, 0, 1000, null,
              function  (err, length) {
                 console.log(buf.toString('utf8', 0, length));
                 fs.close(handle, function () { /* don't care */ });
             }
         );
     }
);