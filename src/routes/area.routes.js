const Router = require('express')

const areaCtrl = require('../controllers/area.controller')

let router = Router()

router.get('/', areaCtrl.getAreas)

router.post('/', areaCtrl.createArea)

module.exports = router
