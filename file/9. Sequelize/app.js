// const db = require("./database");

// insertDataPrecise();

// function fetchData() {
//   db.execute("SELECT * FROM products")
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// function fetchDataDynamic() {
//   db.execute("SELECT * FROM products")
//     .then(([rows, fields]) => {
//       console.table(rows);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// function insertDataPrecise() {
//   db.execute(`SELECT * FROM products WHERE products.id = ?`, [2]).then(([rows]) => {
//     console.table(rows);
//   })
// }

// /*
// ┌─────────┬────┬───────────┬───────┬─────────────────┬───────────┐
// │ (index) │ id │   title   │ price │   description   │ imageUrl  │
// ├─────────┼────┼───────────┼───────┼─────────────────┼───────────┤
// │    0    │ 2  │ 'myTitle' │ 12.99 │ 'myDescription' │ 'myImage' │
// └─────────┴────┴───────────┴───────┴─────────────────┴───────────┘
// */

// ---

const sequelize = require("./database");
const Product = require("./product");
const User = require("./user");

User.belongsTo(Product, { constraints: true, onDelete: "CASCADE" });

function createTable() {
  sequelize.sync();
}

function insertData() {
  Product.create({
    title: "A cyberpunk",
    price: 45.99,
    description: "CP",
    imageUrl: "Cyber"
  });
}

function retrieveData() {
  Product.findAll({ where: { id: 2 } });
}

function deleteData() {
  Product.destroy({ where: { id: 2 } });
}

function deleteDataMore() {
  id = 1;
  Product.findByPk(id).then(product => {
    return product.destroy();
  });
}

deleteDataMore();
