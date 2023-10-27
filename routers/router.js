const express = require('express')
const router = express.Router()
const consignadoController = require('../controllers/consignado-controller')

//HOME
router.get('/', consignadoController.consignado)

router.put('/emprestimos/excluir-consignado', consignadoController.consignado)


module.exports = router;