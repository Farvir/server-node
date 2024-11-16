const http = require ("http");
const fs = require ("fs");
const server = http.createServer((req, res)=> {
    const read = fs.createReadStream("./index.html");
    read.pipe(res);
    console.log("servidor creado");
});

server.listen(3000);
console.log(`server en el puerto ${3000}`);