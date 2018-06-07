const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require("body-parser");
const ProductController = require("./controllers/ProductController");
const TableController = require("./controllers/TableController");
const RelationController = require("./controllers/RelationController");




require("./config/db");

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app
  .route("/api/products")
  .get(ProductController.listAllProducts)
  .post(ProductController.createNewProduct);

app
  .route("/api/products/:Productid")
  .get(ProductController.readProduct)
  .put(ProductController.updateProduct)
  .delete(ProductController.deleteProduct);

app
  .route("/api/tables")
  .get(TableController.listAllTables)
  .post(TableController.createNewTable);

app
  .route("/api/tables/:Tableid")
  .get(RelationController.listAllRelationsFromTable)
  .put(TableController.updateTable)
  .delete(TableController.deleteTableBynumber);

app
  .route("/api/relations")
  .get(RelationController.listAllRelations)
  .post(RelationController.createNewRelation);

app
  .route("/api/relation/:Tableid/:Productid")
  .delete(RelationController.deleteRelation);

app
  .route("/api/relation/:Relationid")
  .get(RelationController.readRelation)
  .post(RelationController.updateRelation);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
