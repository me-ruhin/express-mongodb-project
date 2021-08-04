const Post = require('../models/Post')

const { validationResult } = require('express-validator')

exports.getAllPosts = async (req, res) => {

    const posts = await Post.find()

    res.send(posts)

}


exports.getPostById = async (req, res) => {

    try {
        const id = req.params.id
        const post = await Post.findOne({ _id: id })

        if (!post) return res.status(404).send('post not found')
        res.send(post)
    } catch (err) {
        res.status(500).send(err)
    }

}


exports.createNewPost = async (req, res) => {

    const { title, description, isActived } = req.body
    const post = new Post({ title, description, isActived })

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(500).send({ errors: errors })
    }

    try {

        await post.save()

        res.send(post)

    } catch (e) {

        res.status(400).send(e)
    }

}



exports.updatePost = async (req, res) => {
    const id = req.params.id
    const { title, description, isActived } = req.body
 
 

    try {

        const post = await Post.updateOne({_id:id},{$set:{title, description, isActived }})

        res.send(post).status(200)

    } catch (e) {

        res.status(400).send(e)
    }

}




exports.deletePostById = async (req, res) => {

    try {
        const id = req.params.id
        const post = await Post.deleteOne({ _id: id })       
        res.send(post)
    } catch (err) {
        res.status(500).send(err)
    }

}
