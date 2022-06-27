
const { response } = require('express');

const { db } = require('../../database/conecc_mongo');

const completarDatos = async (req, res = response) => {
    if (req.query.idUser == null || req.query.idUser == '' || req.query.idUser == undefined) {
        res.json({
            msg: 'No se envio id'
        })
    }
    else {
        if (req.query.datos != null || req.query.datos != '' || req.query.datos != undefined) {


            const datos2 = await JSON.parse(req.query.datos)

            const collection = db.collection('Usuario');

       const consulta =     await collection.updateMany({ _id: req.query.idUser, }, {
                $set:
                {
                    formularioCompleto: true,
                    Contacto: {
                        telefono: datos2.telefono,
                        sitioWeb: datos2.nombreEmpresa,
                    },
                    Direccion: {
                        calle: datos2.calle,
                        numero: datos2.numero,
                        cp: datos2.cp,
                        colonia: datos2.colonia,
                        estado: datos2.estado,
                        municipio: datos2.municipio
                    },
                    Ingreso: {
                        actual: datos2.actual,
                        esperado: datos2.esperado,
                    },


                }
            }
            );

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
    completarDatos
}
