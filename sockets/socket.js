const { io } = require('../index.js');




//Mensahes de Sockets
io.on('connection', client => {

    console.log('Cliente Conectado')

    // client.on('event', data => { /* … */ });
    client.on('disconnect', () => { console.log('CLiente desconectado') });







});
