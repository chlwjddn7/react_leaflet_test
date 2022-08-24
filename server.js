const express = require('express');

const server = express();

server.listen(80, function () {
    console.log('Node.js를 활용한 Web Server 구동(Port:80)');
})

server.get('/', function(request, response) {
    //response.sendFile(__dirname + `/views/index.html`);
    var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress 
    console.log('ROOT URL(/)', request.params, ', IP:', ip);
    //response.redirect('/views/index.html');
    response.sendFile(__dirname + '/views/index.html');
})

server.get('/*.html', function(request, response) {
    var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress 
    console.log('/*.html', request.params, ', IP:', ip);
    response.sendFile(__dirname + `/${request.params['0']}.html`);
})

server.get('/*.js', function(request, response) {
    var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress 
    console.log('/*.js', request.params, ', IP:', ip);
    response.sendFile(__dirname + `/${request.params['0']}.js`);
})


server.get('/resources/*', function(request, response) {
    /* console.log('');
    console.log('------------------- resources ------------------');
    console.log('/resources/*.(js|css)', request.params); */
    response.sendFile(__dirname + `/resources/${request.params['0']}`);
})

