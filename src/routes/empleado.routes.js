const Router = require('express')

const empCtrl = require('../controllers/empleado.controller')

let router = Router()

router.get('/',[], empCtrl.getAllEmpleados)

router.get('/:id',[], empCtrl.getEmpleadoById)

router.post('/',[], empCtrl.createEmpleado)

router.put('/:id',[], empCtrl.editEmpleadoById)

router.delete('/:id',[], empCtrl.deleteEmpleadoById)

module.exports = router