//rount
// routes/product.js
const express = require('express');
const router = express.Router();
const { read ,list,create,update,remove,search} = require('../Controller/product'); // นำเข้า controller

// router.get('/product', (req, res) => {
//     res.send('Hello auth Endpoint 200');
// });

router.get('/product/:id', read);
router.get('/product', list);
router.post('/product',create)
router.put('/product/:id',update)
router.delete('/product/:id',remove)

// เส้นทางสำหรับการค้นหา
router.get('/products/search', search);

module.exports = router;
