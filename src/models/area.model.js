const { Schema, model } = require("mongoose");

const AreaSchema = Schema({
    tipo:{
        enum: ['administrativa', 'tecnologia']
    }
},{versionKey:false, timestamps:false})

module.exports = model('Area', AreaSchema)