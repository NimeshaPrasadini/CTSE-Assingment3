const express = require("express");
const Router = express.Router();

const Product = require("../models/product.model");



//get all products
Router.get("/", (req, res) => {
  Product.find().exec((err, users) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, users: users });
  });
});

//get a product
Router.get("/:id", (req, res) => {
  let id = req.params.id;

  Product.findById(id, function (err, user) {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, user });
  });
});

//update a admin
Router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

//delete a admin
Router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id).exec((err, deleteUser) => {
    if (err) {
      res.send(err);
    }
    return res.json(deleteUser);
  });
});






module.exports = Router;
