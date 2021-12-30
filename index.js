const express = require('express');

const port = process.env.PORT || 8000;

const app = express();

// const expressEjsLayouts = require('express-ejs-layouts');

const mongo = require('./config/mongoose');

app.use(express.static('./assets'));

app.use(express.urlencoded({extended :true}));

app.set('view engine', 'ejs');

app.set('views', './views');

// app.use(expressEjsLayouts);

// app.use('/',require('./router/index'));
app.use('/',require('./router/Landing'));
app.use('/',require('./router/createHabit'));



app.listen(port,function(err){
    if(err){
        return console.log('Error while listening');
    }
    return console.log('Listening!!!!');
});