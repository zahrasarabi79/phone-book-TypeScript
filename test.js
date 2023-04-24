let http = require("http");
var url = require('url');

let server = http.createServer(function (req, res) {
  const {pathname,query} = url.parse(req.url, true);
console.log(url.parse(req.url, true))
  res.writeHead(200, { "Content-Type": "application/json" });
  if (pathname == "/add") res.end("adding!\n");
  else if (pathname=="/delete"){
    res.end(`{'name':'${query.name}', 'phone':'${query.phone}'}`)
  }
  else res.end( "invalid");
});

let port = 80;
server.listen(port);
console.log(`Server running on port ${port}`);
