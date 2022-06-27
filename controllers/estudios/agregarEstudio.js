const { parse } = require('dotenv');
const { response } = require('express');

const { db } = require('../../database/conecc_mongo');
const idgenerar = require('bson').ObjectID;


const agregarEstudios = async (req, res = response) => {

    const newestudio = idgenerar();
    const idparce = newestudio.toString();
    // console.log(req.headers);

    if (req.query.idUser == null || req.query.idUser == '' || req.query.idUser == undefined) {
        res.json({
            msg: 'No se envio id'

        })
    }

    else {



        if (req.query.datos != null || req.query.datos != '' || req.query.datos != undefined) {

            const datos2 = await JSON.parse(req.query.datos)
            // // console.log(consulta1);
            // console.log(datos2.nombre);
           
            // console.log(datos2.escuela)

            const collection = db.collection('Usuario');
            const consulta = await collection.updateOne({ _id: req.query.idUser }, { $push: { 'Estudios': { 
                idEstudio: idparce, 
                escuela: datos2.escuela, 
                grado:datos2.grado ,
                fechaInicio:datos2.fechaInicio ,
                fechaFin:  datos2.fechaFin ,
            } } });
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
    agregarEstudios
}



