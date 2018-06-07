const Relation = require("../models/Relation");

exports.listAllRelations = (req, res) => {
  Relation.find({}, (err, Relation) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Relation);
  });
};

exports.listAllRelationsFromTable = (req, res) => {
  Relation.find({ table: req.params.Tableid}, (err, Relation) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Relation);
  });
};

exports.createNewRelation = (req, res) => {
  let newRelation = new Relation(req.body);
  newRelation.save((err, Relation) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(Relation);
  });
};

exports.readRelation = (req, res) => {
  Relation.findById(req.params.Relationid, (err, Relation) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Relation);
  });
};

exports.updateRelation = (req, res) => {
  Relation.findOneAndUpdate(
    { _id: req.params.Relationid },
    req.body,
    { new: true },
    (err, Relation) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(Relation);
    }
  );
};

exports.deleteRelation = (req, res) => {
  Relation.findOneAndRemove({ table: req.params.Tableid, product: req.params.Productid }, (err, Relation) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Relation successfully deleted" });
  });
};


