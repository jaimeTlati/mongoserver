// const { parse } = require('dotenv');
const { response } = require('express');

const { db } = require('../../database/conecc_mongo');


const eliminarExperiencia = async (req, res = response) => {
    const collection = db.collection('Usuario');
    if (req.query.idUser == null || req.query.idUser == '' || req.query.idUser == undefined) {
        res.json({
            msg: 'No se envio id'

        })
    }
    else {
        const consulta = await collection.updateMany({ _id: req.query.idUser, }, {
            $pull: {
                'Experiencias': {
                    idExperiencia: req.query.idExperiencia,
                }
            }
        }).finally();

        if (consulta.modifiedCount != 0) {
            res.json({
                ok: "Se elimino un elemento"
            });

        } else {
            res.json({
                ok: "error al elimnar"
            })
        }
    }
}
module.exports = {
    eliminarExperiencia
}