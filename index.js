const express = require("express");
const { resolve } = require('path')
require("dotenv").config()

const app = express()
const { dbconection } = require('./database/config');
const {  coneccion } = require('./database/conecc_mongo');

coneccion();
// dbconection();

//Lectura y parceo del body 
app.use(express.json());
var cors = require('cors')

//bode.socket Server.
const server = require("http").createServer(app);


module.exports.io = require("socket.io")(server)

require("./sockets/socket.js");
const { PORT } = process.env

const publicPath = resolve(__dirname, "public");
app.use(express.static(publicPath));



app.use('/api/usuarios' ,cors(),  require ('./routes/usuarios'))


server.listen(PORT, (err) => {
    if (err) throw new Error(err)

    console.log("Servidor corriendo en puerto :", PORT)
})