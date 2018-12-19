const express = require('express');
const{get} = require("axios");
const bodyParser = require('body-parser');
const session = require('express-session');

let items;
const PORT = 8080;
const URL = 'https://kodaktor.ru/j/users';
const app = express();

const checkAuth = (r, res, next) => {
  if (r.session.auth === 'ok'){
      next();
  } else {
    res.redirect('/login');
  }
};

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(session({ secret: 'mysecret', resave: true, saveUninitialized: true }))
    .get(/hello/, r => r.res.end('Hello world!'))
    .get(/users/, checkAuth, async r => r.res.render('list', {title: 'Список логинов', items}))
    .get('/login', r => r.res.render('login'))
    .get('/logout', r => {
        r.session.auth = 'out';
        r.res.send('You were out!');
    })
    
    
    .post('/login/check/', r=> {
        const { body: { login: l} } = r;
        const user = items.find(({ login }) => login === l);
        if(user){
            if(user.password === r.body.pass){
                r.session.auth = 'ok';
                r.res.send('Good!');
            }
            else {
                r.res.send('Wrong pass!');
            }
        }
        else {
            r.res.send('No such user!');
        }
    })
    .use(r => r.res.status(404).end('Still not here, sorry!'))
    .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
    .set('view engine', 'pug')
    .listen(process.env.PORT || PORT, async () => {
        console.log(`Старт процесса: ${process.pid}`);
        items = (await get(URL)).data.users;
        ({data: {users: items}} = await get(URL));
    });
    
// npm i express axios pug
// npm install -g npm
// http://goss-minbulat.c9users.io:8080/