import {createServer} from 'node:http';

const server = createServer((req,res)=> {
    res.writeHead(500, {'content-type':'text/html' });
    res.end('server is running');
})

server.listen(3000, '127.0.0.1', ()=> {
    console.log('Server is listening');
})


// Arrow functions

function handleRequest()

const handleRequest =() => {6}
