CREATE DATABASE bamazon;

CREATE TABLE bamazon.products (
	item_id INT NOT NULL AUTO_INCREMENT,
    department VARCHAR(255) NOT NULL,
    productName VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * from bamazon.products;

INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Electronics','QuietComfort 35 wireless headphones II', 279.95, 100);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Electronics','Sennheiser Momentum True Wireless Earbuds', 204.82, 90);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Clothing','Turtleneck sweater in extra-fine Italian merino wool by BOSS', '178.00', 100);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Clothing','Slim-fit coat with detachable inner bib', 695.00, 80);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Beauty & Personal Care',"Men's Rogaine 5% Minoxidil Foam", 44.99, 70);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Beauty & Personal Care','NIVEA Men Maximum Hydration 3-in-1 Nourishing Lotion', 5.48, 60);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Garden & Outdoor','NATIONAL GEOGRAPHIC Junior Metal Detector', 44.99, 50);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Garden & Outdoor','DEWALT Lithium Ion XR Brushless Blower', 179.99, 40);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Toys & Games','Play Arts Kai Batman (Tetsuya Version) Action Figure', 233.98, 30);
INSERT INTO bamazon.products (department, productName, price, quantity) VALUES ('Toys & Games','Play Arts Kai: War Machine Action Figure', 111.99, 20);
