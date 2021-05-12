const Cargo =  require ('../models/cargo.model')

exports.getAllCargos = async(req , res)=>{

    try {
        
        const cargos = await Cargo.find()

        res.status(200).json({ok:true, data: cargos})

    } catch (error) {
        res.status(500).json({ok:false, msg: error})
        console.log(error);
    }
}

exports.getCargosByArea = async(req, res)=>{

    const { area }= req.params

    try {

        const cargos = await Cargo.find({area})

        res.status(200).json({ok:true, data: cargos})
        
    } catch (error) {
        res.status(500).json({ok:false, msg: error})
        console.log(error);
    }

}

exports.createCargo = async(req, res)=>{
    try {
        
        const cargo = new Cargo(req.body)

        await cargo.save()

        res.status(200).json({ok: true, data:cargo})

    } catch (error) {
        res.status(500).json({ok:false, msg: error})
        console.log(error);
    }
}