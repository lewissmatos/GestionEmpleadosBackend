const Empleado = require('../models/empleado.model')

exports.getAllEmpleados = async (req,res)=>{
    
    try {
        const empleados = await Empleado.find()
        .populate('cargo')
        
        res.status(200).json({ok:true, data: empleados})
    } catch (error) {
        console.log(error);
        return res.sttus(500).json({ok:false, msg: error})
    }
}

exports.getEmpleadoById = async (req,res)=>{
    const {id} = req.params

    try {
        const empleado = await Empleado.findById(id)
        .populate('cargo')
        
        res.status(200).json({ok:true, data: empleado})
    } catch (error) {
        console.log(error);
        return res.sttus(500).json({ok:false, msg: error})
    }
}

exports.createEmpleado = async(req,res)=>{

    try {

        const empleado = new Empleado(req.body)

        await empleado.save()
        
        res.status(200).json({ok:true, data: empleado})
        
    } catch (error) {
        console.log(error);
        return res.sttus(500).json({ok:false, msg: error})
    }
}

exports.editEmpleadoById = async(req,res)=>{

    const {id} = req.params

    try {
        
        const editedEmpleado = await Empleado.findByIdAndUpdate(id, req.body, {new: true})
        
        res.status(200).json({ok:true, data: editedEmpleado})
        
    } catch (error) {
        console.log(error);
        return res.sttus(500).json({ok:false, msg: error})
    }
}

exports.deleteEmpleadoById = async(req,res)=>{

    const {id} = req.params
    
    try {
        
        const deletedEmpleado = await Empleado.findByIdAndDelete(id)
        
        res.status(200).json({ok:true, data: deletedEmpleado})
        
    } catch (error) {
        console.log(error);
        return res.sttus(500).json({ok:false, msg: error})
    }
}