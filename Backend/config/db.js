const mysql = require("mysql2/promise");
const dbConn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'product_database',
});


module.exports = dbConn;
