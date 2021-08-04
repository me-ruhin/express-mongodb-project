const router = require('express').Router()
const {check} = require('express-validator')
const { getAllPosts,createNewPost,getPostById,updatePost,deletePostById } = require('../controllers/postController')

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.put('/update/:id', updatePost)
router.delete('/delete/:id', deletePostById)

router.post('/create',[check('title','Title field is required'),check('description','Description field is required')],createNewPost)



module.exports = router