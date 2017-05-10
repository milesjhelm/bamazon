CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee", "kitchen", 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chocolate", "kitchen", 3.10, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flour", "kitchen", 3.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shirts", "clothing", 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jeans", "clothing", 43.10, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "clothing", 43.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("boots", "clothing", 62.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("candles", "household", 1.10, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bleach", "household", 3.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tape", "household", 3.75, 75);