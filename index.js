// const express = require('express');
// const app = express();
// const port = 9090;

// app.use(express.static('public'))
// app.get('/', (req, res) => res.send('Hello World !'));

// app.listen(port, () => console.log(`App listening to port ${port}`));

//Post code
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());





const express = require('express');
const app = express();
const port = 9090;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname:'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));
app.use(express.static('public'))
fakeApi = () => {
    return [
      {
        flavor: 'Chocolate Chip',
        type: 'Ice Cream',
        clause: 'dessert'
      },
      {
        flavor: 'Chocolate Chip',
        type: 'Cookie',
        clause: 'dessert'
      },
      {
        flavor: 'Funfetti',
        type: 'Cake',
        clause: 'dessert'
      },
      {
        flavor: 'Vanilla',
        type: 'Icing',
        clause: 'dessert'
      }
    ];
  }
app.get('/', (req, res) => {
res.render('main', {layout: 'index', dessert: fakeApi(), listExists: true});
});

app.post('/', (req, res) => {
res.render('main', {layout: 'planB', dessert: fakeApi(), listExists: true});
});


app.use(function(req,res){
    res.status(404);
    res.render('404 - Error: File not found');
  });

app.listen(port, () => console.log(`App listening to port ${port}; press Ctrl-C to terminate.`));