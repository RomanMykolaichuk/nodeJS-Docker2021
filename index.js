const http = require('http');
const PORT =3300

const server = http.createServer((request,response)=>{
  response.setHeader("Content-Type", "text/html")
  response.end('<h1>Hello World!</h1>')
});

server.listen(PORT)


