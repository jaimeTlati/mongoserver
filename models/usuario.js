const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    _id:{
        type:String,
        require:true
    },

    // formularioCompleto: {
    //     type: Boolean,
        
    // },
    // TipoUsuario: {
    //     type: Object,
    //     requiere: false,
       
    // },
    // Identificacion: {
    //     type: Object,
    //     requiere: true
    // },
    // Estudios: {
    //     type: Array,
    //     requiere: true
        
    // },
    // Experiencias: {
    //     type: Array,
    //     requiere: true
        
    // }, 
    nombre: {
        type: String,
        requiere: true

        
    }, 
    // CalificacionRespon: {
    //     type: Array,
    //     requiere: true
        
    // }, 
    // CalificacionServicio: {
    //     type: Array,
    //     requiere: true
        
    // },
    //  Contacto: {
    //     type: Object,
    //     requiere: true
        
    // }, 
    // Direccion: {
    //     type: Object,
    //     requiere: true   
    // }, 
    // Ingreso: {
    //     type: Object,
    //     requiere: true
    // },


});
UsuarioSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('Usuario', UsuarioSchema );