const express = require('express')
const mongoose = require('mongoose');
const postRouter = require('./routes/postRouter')
const userRouter = require('./routes/userRoouter')

const app = express()
app.use(express.json())

app.use('/posts', postRouter)
app.use('/users', userRouter)


app.get('*', (req, res) => {
    res.status(404).send("404 Not Found")
})

const PORT = process.env.PORT || 3030


mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER RUNNING AT ${PORT}`)
        })
    })
    .catch(err => { console.log(err) })



