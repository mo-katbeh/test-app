const http = require('http');
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write('Hello World');
        res.end(); 
    }
    if (req.url === '/courses/node'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
var port = 3000;

server.listen(port);
console.log(`Listening on port ${port}...`)