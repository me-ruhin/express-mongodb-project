const router = require('express').Router()
const {getAllUser,createuser,getAllUserById} = require('../controllers/userController')

router.get('/',getAllUser)
router.get('/:id',getAllUserById)
router.post('/create',createuser)

getAllUserById

module.exports = router