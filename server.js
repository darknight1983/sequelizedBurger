const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const Router = require('./controllers/burgers_controller');
const db = require('./models');



const app = express();

app.set('port', process.env.PORT || 3000)

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '/public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use(Router);






db.sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log(`You are listening on port: ${app.get('port')}`);
  });
})
