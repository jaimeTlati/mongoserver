// const { parse } = require('dotenv');
const { response } = require('express');

const { db } = require('../../database/conecc_mongo');


const editarEstudios = async (req, res = response) => {
    if (req.query.idUser == null || req.query.idUser == '' || req.query.idUser == undefined) {
        res.json({
            msg: 'No se envio id'
        })
    }
    else {
        if (req.query.datos != null || req.query.datos != '' || req.query.datos != undefined) {

            const datos2 = await JSON.parse(req.query.datos)
            const collection = db.collection('Usuario');
            const consulta =   await collection.updateMany({ _id: req.query.idUser, "Estudios.idEstudio": datos2.idEstudio }, {
                $set:
                {
                    "Estudios.$": {
                        idEstudio: datos2.idEstudio,
                        escuela: datos2.escuela,
                        grado: datos2.grado,
                        fechaInicio: datos2.fechaInicio,
                        fechaFin: datos2.fechaFin,
                    }
                }
            }
            );
            // const datosR = req.headers.datos;
            if (consulta.acknowledged != 0) {
                res.json({
                    ok: "Datos gurdados"
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
    editarEstudios
}



