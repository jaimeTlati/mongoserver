const { response } = require('express');

const { db } = require('../../database/conecc_mongo');
const { MongoServerError } = require('mongodb');


const newUser = async (req, res = response) => {

    const collection = db.collection('Usuario');
     const nuevoUser = await JSON.parse(req.query.datos)
    try {
        const agrega = await collection.insertOne(
           
                {
                _id: nuevoUser.id,
                nombre: nuevoUser.nombre,
                TipoUsuario: {
                    tipo: nuevoUser.tipo,
                    subtipo: nuevoUser.subtipo
                }
            }

        ).finally();

        const id = agrega.insertedId;
        res.json(
            {
                statusCode: 200,
                msg: "Agregado",
                idAgregado: id
            }
        );
    } catch (error) {
        if (error instanceof MongoServerError) {
            console.log(`Error worth logging: ${error}`);
            res.json(
                {
                    err: error
                }
            );
        }
    }
}

module.exports = {
    newUser
}
