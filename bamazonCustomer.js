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
    // initializes the variable newguy to be a programmer object which will take
    // in all of the user's answers to the questions above
    console.log(answers.item + answers.quantity);
    // printInfo method is run to show that the newguy object was successfully created and filled
  });
};



var start = function() {
  console.log("The following items are available in the bamazon inventory:\n");
  // query the database for all items for sale
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



// run the start function when the file is loaded to prompt the user
start();


