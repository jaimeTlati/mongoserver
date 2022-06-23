
const { response } = require('express');

const { db, client } = require('../database/conecc_mongo');

const getUsuarios = async (req, res = response) => {

    const id = req.query.idUser;

    if(req.query.idUser == null ||req.query.idUser == ''|| req.query.idUser== undefined ){
        res.json({
            msg: 'No se envio id'

        })
    }

    else
       { 
        const collection = db.collection('Usuario');
        // const usuario2 =  await collection.find({ _id : req.query.idUser}).toArray();
        const usuario = await collection.find({ _id:req.query.idUser}).toArray();
       
        res.json({
            usuario
        })
    }




}

module.exports = {
    getUsuarios
}
