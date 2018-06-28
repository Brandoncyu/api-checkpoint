const express = require('express')
const router = express.Router()
const contr = require('../controllers/dbzChar')

router.get('/', contr.getAll)
router.get('/:id', contr.getOne)
router.post('/', contr.create)
router.put('/:id', contr.update)
router.delete('/:id', contr.remove)

module.exports = router
