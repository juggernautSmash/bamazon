const mysql = require('mysql2')
const Table = require('cli-table2')
const inquirer = require('inquirer')

let productTable = new Table({
  head: ['Item ID', 'Department', 'Item Name', 'Price', 'In Stock']
})

let productObjectArray = []

const bamazon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'
})

const productDisplay = () => {
  // re-initialize variable so it can take update mysql values
  productTable = new Table({head: ['Item ID', 'Department', 'Item Name', 'Price', 'In Stock'] }) 
  productObjectArray = [] 

  //Get values from mysql table
  bamazon.query('SELECT * from products', ( e, d ) => {
    e ? console.log(e) : console.log('Query success')
    d.forEach( ({ item_id, department, productName, price, quantity}) => {
      productTable.push([item_id, department, productName, `$${price}`, quantity])
      productObjectArray.push(
        {
          item_id: item_id,
          department: department,
          productName: productName,
          price: price,
          quantity: quantity
        }) // end push
    }) // end forEach
    console.log(productTable.toString())
  }) //end bamazon.query

  customerPrompt()
} // end productDisplay
const customerPrompt = () => {
  inquirer.prompt([
    {
      type: 'number',
      name: 'item_id',
      message: 'Please choose which Item ID you would like to purchase from the product list: ',
      validate: value => isNaN(value) ? 'Please enter a valid Item ID' : true
    },
    {
      type: 'input',
      name: 'purchaseQuantity',
      message: 'How much would you like to purchase? ',
    }
  ])
  .then( ({item_id, purchaseQuantity}) => {
    // console.log(`answer in item is ${item_id}`)
    bamazon.query(`SELECT * FROM products`, (e, d) => {
      e ? console.log(e) : true
      if( item_id > d.length) {
        console.log('Please enter a valid Item ID')
        customerPrompt()
      }
    })
    // console.log(`answer in quantity is ${purchaseQuantity}`)
    if(productObjectArray[item_id-1].quantity === 0){
      console.log(`This prodcut is currently out of stock`)
      customerPrompt()
    }
    else if(purchaseQuantity > productObjectArray[item_id-1].quantity){
      console.log(`The quantity you have place exceeds our stock. Please restart the order process`)
      customerPrompt()
    } else{
      productObjectArray[item_id-1].quantity -= purchaseQuantity
      bamazon.query(`UPDATE products SET quantity=${productObjectArray[item_id-1].quantity} 
        WHERE item_id=${item_id}`)
      productDisplay()
    }
  })
} // end customerPrompt

productDisplay()