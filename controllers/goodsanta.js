var express = require('express');
var GoodSanta = require('../models/goodsanta');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    GoodSanta.find(function(err, goodsantas) {
      if (err) return res.status(500).send(err);
      res.send(goodsantas);
    });
  })
  .post(function(req, res) {
    GoodSanta.create(req.body, function(err, goodsanta) {
      if (err) return res.status(500).send(err);
      res.send(goodsanta);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    GoodSanta.findById(req.params.id, function(err, goodsanta) {
      if (err) return res.status(500).send(err);
      res.send(goodsanta);
    });
  })
  .put(function(req, res) {
    GoodSanta.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    GoodSanta.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;