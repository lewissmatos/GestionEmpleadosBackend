const { Schema, model } = require("mongoose");

const EmpleadoSchema = Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    fechaNac: {
        type: Date,
        required:true
    },
    pais:{
        type: String,
        required: true
    },
    usuario:{
        type:String,
        required:true
    },
    fechaCont:{
        type: Date,
        required: true
    },
    estado:{
        type: Boolean,
        default: true
    },
    area:{
        type: Schema.Types.ObjectId,
        ref: 'Area'
    },
    
    cargo:{
        type: Schema.Types.ObjectId,
        ref: 'Cargo'
    },
    comision:{
        type:Number
    }

},{versionKey:false, timestamps:false})

module.exports = model('Emepleado', EmpleadoSchema)