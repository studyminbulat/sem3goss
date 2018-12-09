const   http = require("http"), 
        zlib = require("zlib")

// http.Server((req, res) => req.pipe(zlib.createGzip()).pipe(res)).listen(8080);

http.Server((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'myfile.zip');
    req.pipe(zlib.createGzip()).pipe(res);
    }).listen(8080);
    
// curl localhost:8080 -X POST --upload-file README.md --output 5.zip

