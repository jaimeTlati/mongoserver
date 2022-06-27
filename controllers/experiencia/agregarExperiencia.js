const { parse } = require('dotenv');
const { response } = require('express');

const { db } = require('../../database/conecc_mongo');
const idgenerar = require('bson').ObjectID;


const agregarExperiencia = async (req, res = response) => {
    const newestudio = idgenerar();
    const idparce = newestudio.toString();

    if (req.query.idUser == null || req.query.idUser == '' || req.query.idUser == undefined) {
        res.json({
            msg: 'No se envio id'
        })
    }
    else {
        if (req.query.datos != null || req.query.datos != '' || req.query.datos != undefined) {
            const datos2 = await JSON.parse(req.query.datos)
            const collection = db.collection('Usuario');
            const consulta = await collection.updateOne({ _id: req.query.idUser }, { $push: { 'Experiencias': { 
                idExperiencia: idparce, 
                nombreEmpresa: datos2.nombreEmpresa, 
                cargo:datos2.cargo ,
                fechaInicio:datos2.fechaInicio ,
                fechaFin:  datos2.fechaFin ,
            } } });
            if (consulta.acknowledged != 0) {
                res.json({
                    msg: "Datos gurdados"
                });

            } else {
                res.json({
                    ok: false
                })
            }
        } else {

            res.json({
                msg: "No se recbieron datos"
            })
        }
    }
}

module.exports = {
    agregarExperiencia
}