var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});



// User places order
var placeOrder = function() {
  console.log("Place an order:\n")
  inquirer.prompt([
    {
      name: "item",
      message: "What is the Item ID of the product you would like to order?"
    }, {
      name: "quantity",
      message: "How many would you like to order?"
    } 
  ]).then(function(answers) {

    connection.query("SELECT * FROM products WHERE ?", {
      item_id: answers.item
    }, function(err, res) {
      //If there is enough stock of the requested product, subtract
      // console.log("quantity is " + res[0].stock_quantity)
      var new_quantity = res[0].stock_quantity - answers.quantity
      if (new_quantity >= 0 ) {
        // console.log(new_quantity);

        connection.query("UPDATE products SET ? WHERE ?", [{
          stock_quantity: new_quantity
        }, {
          item_id: answers.item
        }], function(err, res) {
          if (err) throw err;
          console.log("\nOrder successfully placed.\n");
          start();
        });

      } else {
        console.log("\nNot enough is in stock to complete your order.\n\n");
        start();
      }

    });

  });
};


// First function to execute. Lists contents of database. Calls placeOrder()
var start = function() {
  console.log("The following items are available in the bamazon inventory:\n");
  // query the database for all items in bamazon
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
     // once you have the items, prompt the user for which they'd like to buy and quantity

    for(var i=0; i < results.length; i++) {
      console.log("Item ID: " + results[i].item_id + " Product: " + results[i].product_name 
        + " Department: " + results[i].department_name + " Price: " + results[i].price 
        + " Stock Quantity: " + results[i].stock_quantity);
     }

    placeOrder();
   });


};

//Call the start function to get things going. This function is called elsewhere, as well.
start();


