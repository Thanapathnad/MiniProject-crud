const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongan = require('morgan')
const dbConn = require('./config/db');
const { readdirSync } = require('fs')

app.use(mongan('dev'))
app.use(cors());

// Middleware - บอกวิธีการที่ client ส่งข้อมูลผ่าน middleware
app.use(bodyParser.urlencoded({extended:false})) // ส่งผ่าน Form
app.use(bodyParser.json()) // ส่งด้วย Data JSON





readdirSync('./Rount').map((r)=> app.use('/api',require('./Rount/' + r)))

app.listen(5000, async() => {
    console.log("Server is running at port 5000")
      // Connect to the database
      try {
        await dbConn; 
        console.log('Database connection successful');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
})
