const { Schema, model } = require("mongoose");

const AreaSchema = Schema({
    tipo:{
        type:String,
        enum: ['administrativa', 'tecnologia'],
        required: true
    }

},{versionKey:false, timestamps:false})

module.exports = model('Area', AreaSchema)