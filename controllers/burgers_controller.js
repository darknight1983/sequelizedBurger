const express = require('express');
const sequelize = require('sequelize');
const db = require('../models');




// Create an instance of a express router.
const Router = express.Router();


Router.get('/', (req, res) => {
  db.BigMac.findAll({}).then((burgers) => {
    let yummyThings = {
        allBurgers: burgers
      };
      res.render('index', yummyThings);
  });
});

Router.post('/api/addBurger', (req, res) => {
  db.BigMac.create({
    burgerName: req.body.burger
  }).then(results => console.log(results.dataValues))
});

Router.put('/api/updateBurger/:burger_id', (req, res) => {
  db.BigMac.update({
    devoured: true
  },{
    where: {
      id: req.params.burger_id
    }
  }).then((results) => {
    if (results.affectedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  })
});

module.exports = Router;
