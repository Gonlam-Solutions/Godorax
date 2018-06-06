const Table = require("../models/Table");

exports.listAllTables = (req, res) => {
  Table.find({}, (err, Table) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Table);
  });
};

exports.createNewTable = (req, res) => {
  let newTable = new Table(req.body);
  newTable.save((err, Table) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(Table);
  });
};

exports.readTable = (req, res) => {
  Table.findById(req.params.Tableid, (err, Table) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(Table);
  });
};

exports.updateTable = (req, res) => {
  Table.findOneAndUpdate(
    { _id: req.params.Tableid },
    req.body,
    { new: true },
    (err, Table) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(Table);
    }
  );
};

exports.deleteTable = (req, res) => {
  console.log(req.params.Tableid);
  Table.findOneAndRemove({ _id: req.params.Tableid }, (err, Table) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Table successfully deleted" });
  });
};

  exports.deleteTableBynumber = (req, res) => {
    console.log(req.params.Tableid);
    Table.findOneAndRemove({ tableNumber: req.params.Tableid }, (err, Table) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json({ message: "Table successfully deleted" });
    });
};
