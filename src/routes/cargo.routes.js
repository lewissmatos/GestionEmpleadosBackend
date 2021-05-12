const Router = require('express')

const cargoCtrl = require('../controllers/cargo.controller')

let router = Router()

router.get('/', cargoCtrl.getAllCargos)

router.get('/:area', cargoCtrl.getCargosByArea)

router.post('/', cargoCtrl.createCargo)

module.exports = router
