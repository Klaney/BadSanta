var express = require('express');
var BadSanta = require('../models/badsanta');
var User = require('../models/user');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    BadSanta.find(function(err, badsantas) {
      if (err) return res.status(500).send(err);
      res.send(badsantas);
    });
  })
  .post(function(req, res) {
    BadSanta.create(req.body, function(err, badsanta) {
      console.log(badsanta);
      User.findById(badsanta._creator, function(err, user){
        user.badsantas.push(badsanta);
        console.log(user);
      })
      if (err) return res.status(500).send(err);
      res.send(badsanta);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    BadSanta.findById(req.params.id, function(err, badsanta) {
      if (err) return res.status(500).send(err);
      res.send(badsanta);
    });
  })
  .put(function(req, res) {
    BadSanta.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    BadSanta.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;