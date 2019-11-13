const mysql = require('mysql2')
const Table = require('cli-table2')
//const inquirer = require('inquirer')



const productTable = new Table({
  head: ['Item ID', 'Department', 'Item Name', 'Price', 'In Stock']
})

const bamazon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'
})

bamazon.query('SELECT * from products', ( e, d ) => {
  e ? console.log(e) : console.log('Query success')
  d.forEach( ({ item_id, department, productName, price, quantity}) => {
    productTable.push(
      [item_id, department, productName, `$${price}`, quantity]
    )
  })
  console.log(productTable.toString())
})

// function customerPrompt () {

// }