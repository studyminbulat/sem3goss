const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stylus = require('express-stylus');
const nib = require('nib');
const join = require('path').join;
const conString = "mongodb+srv://admin:1234@cluster0-0g0o0.mongodb.net/test?retryWrites=true";
const conString2 = "mongodb+srv://admin:1234@cluster0-0g0o0.mongodb.net/admin"

// npm i express body-parser 

const app = new express();
mongoose.connect(conString, { useNewUrlParser: true });

const postSchema = new mongoose.Schema({
    id: Number,
    title: String,
    categories: String,
    content: String,
})
const Post = mongoose.model("post", postSchema);

const formatter = data => ({ id: data.id, title: data.title, categories: data.categories, content: data.content })
const publicDir = join(__dirname, '/assets');
app
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())
.use((req, res, next) => {
    res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
    });
    next();
})
.set('views', './views')
.set('view engine', 'pug')
.use(stylus({
  src: publicDir,
  use: [nib()],
  import: ['nib']
}))
.use(express.static(publicDir))
.get('/', (req, res) => {
    res.render('index');
})
.get('/api/posts', (req, res) => {
    const posts = Post.find({}, (error, post) => {
        res.send(post.map(formatter))
    });
})
.post('/api/posts', (req, res) => {
    const { id, title, categories, content } = req.body;
    const post = new Post({ id: Number.parseInt(id),  title, categories, content })
    post.save()
    .then(doc=> res.send(formatter(doc)))
    .catch(err => {
        console.log(err);
        res.send(err);
    });
    
})    
.get('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    const posts = Post.findOne({id: id}, (error, post) => {
        res.send(formatter(post))
    });
})

.delete('/api/posts/:id', (req, res) => {
    const { id } = req.params;
     const posts = Post.findOne({id: id}, (error, post) => {
         const postsDel = Post.deleteOne({id: id}, (error, postDel) => {
            res.send(formatter(post))
        });
    });
   
})

.listen( 8081, () => console.log('I`m OK'));

//http://goss-minbulat.c9users.io:8080