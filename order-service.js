const http = require('http');
const url = require('url');

const menus = ['Nasi Goreng','Mie Goreng', 'Mie rebus', 'Es teh', 'Es tawar'];
const MISSING = 3;
const  server = http.createServer((req,res) => {
    const id = pathname.match(/^\/(\d+)$/);
    if (!id) {
        res.statusCode = 400 ;
        return void  res.end () ;
    }
    id2 = Number(id[1]);
    if (id2 === MISSING) {
        res.statusCode = 400 ;
        return void  res.end() ;
    }
    res.end(JSON.stringify({
        id,
        menu : menus[id % menus.length] ,
    }));
});
server.listen(process.env.PORT || 0, () => {
    const { port } = server.address();
    console.log(`Order service listening on localhost on port: ${port}`);
});