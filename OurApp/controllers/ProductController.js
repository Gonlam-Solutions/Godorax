const Product = require("../models/Product");

exports.listAllProducts = (req, res) => {
  Product.find({}, (err, Product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Product);
  });
};

exports.createNewProduct = (req, res) => {
  let newProduct = new Product(req.body);
  newProduct.save((err, Product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(Product);
  });
};

exports.readProduct = (req, res) => {
  Product.findById(req.params.Productid, (err, Product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Product);
  });
};

exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.Productid },
    req.body,
    { new: true },
    (err, Product) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(Product);
    }
  );
};

exports.deleteProduct = (req, res) => {
  console.log(req.params.Productid);
  Product.findOneAndRemove({ _id: req.params.Productid }, (err, Product) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Product successfully deleted" });
  });
};

