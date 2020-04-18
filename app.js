var express = require('express');

var app = express();

app.get('/', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('accueil.ejs',{noms: noms});
})
.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);