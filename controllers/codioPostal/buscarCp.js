
const { response } = require('express');

const { db } = require('../../database/conecc_mongo');

const getCodigos = async (req, res = response) => {
    if (req.query.cp == null || req.query.cp == '' || req.query.cp == undefined) {
        res.json({
            msg: 'No se envio codigo postal'

        })
    }
    else {
        const collection = db.collection('CP');
        const codigo = await collection.find({ cp: req.query.cp }).toArray();

        res.json({
            codigo
        })
    }
}

module.exports = {
    getCodigos
}
