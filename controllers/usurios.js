
const { response } = require('express');

 const {  db , client} = require('../database/conecc_mongo');

const getUsuarios = async (req,  res = response) => {

    console.log(req);
    const collection =  db.collection('Usuario');
const usuario = await collection.find({_id: 'MvrJw7BriWfNqeb5KsOy6160Qct2'}).toArray();

    // const desdes = Number(req.query.desde) || 0;

    //listar de forma desende de forma conectados
    //filtro para quitar mis datos en esta consulta y el skip aplica un filtro del numero de datos a regresar
    // const usuarios = await Usuario.find({ _id: { $ne: req.uid } }).sort('-online').skip(desdes).limit(5);
    // const usuarios = await Usuario.find({ _id: 'Rb9CJFkirkSLlHKsVmg7laxqh0H2' }).toArray();
    

    // {ok: true, msg: 'getusuarios'}
    res.json({
        usuario
       
    })
}

module.exports = {
    getUsuarios
}
