const { Schema, model } = require("mongoose");

const CargoSchema = Schema({
    cargo:{
        type:String,
        required: true,
        trim: true
    },
    area:{
        type: String,
        enum:['administrativa','tecnologia']
    }
}, {versionKey: false, timestamps:false})

module.exports = model('Cargo', CargoSchema)