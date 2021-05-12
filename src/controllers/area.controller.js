const Area =  require ('../models/area.model')

exports.getAreas = async(req,res)=>{
    
    try {
        
        const areas = await Area.find()

        res.status(200).json({ok:true, data: areas})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ok:false, msg: error})
    }
}

exports.createArea = async(req,res)=>{
    
    try {
        
        const area = new Area(req.body)

        await area.save()

        res.status(200).json({ok:true, data: area})

    } catch (error) {
        
        console.log(error)

        res.status(500).json({ok:false, msg: error})
    }
}