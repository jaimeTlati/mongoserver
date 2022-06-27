const { response } = require('express');

const { db } = require('../database/conecc_mongo');

const editarNombre = async (req, res = response) => {

    const id = req.query.idUser;

    if (req.query.idUser == null || req.query.idUser == '' || req.query.idUser == undefined) {
        res.json({
            statusCode: 401,
            msg: 'No se envio id'

        })
    }
    else {
        if (req.query.nombre == null || req.query.nombre == '' || req.query.nombre == undefined) {
            res.json({
                statusCode: 401,
                msg: 'No se envio nombre para editar'

            })
        } else {
            const collection = db.collection('Usuario');
            // const usuario2 =  await collection.find({ _id : req.query.idUser}).toArray();
            const eliminar = await collection.updateOne({ _id: req.query.idUser }, {
                $set: {
                    nombre: req.query.nombre
                }
            });
            if (eliminar != 0) {

                res.json({
                    statusCode: 200,
                    msg: "Nombre de usuario editado"
                })
            } else {
                res.json({
                    statusCode: 401,
                    msg: "Error al editar usuario, verfica tus datos"
                })
            }
        }
    }
}

module.exports = {
    editarNombre
}
