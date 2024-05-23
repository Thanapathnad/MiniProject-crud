//controller

const dbConn = require('../config/db'); // ตรวจสอบเส้นทางการนำเข้า


exports.read = async (req, res) => {
    try {
        const connection = await dbConn
        const [rows] = await connection.query('SELECT * from online_product where product_id = ' + req.params.id)
        res.send(rows)

    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }

};



exports.list = async (req, res) => {
    try {
        const connection = await dbConn
        const [rows] = await connection.query('SELECT * from online_product')
        res.send(rows)

    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }

};



exports.create = async (req, res) => {
    try {
        console.log(req.body)
        const { product_name, detail, price } = req.body;
        const connection = await dbConn.getConnection();
        const [result] = await connection.execute(
            "INSERT INTO online_product (product_name,detail,price ) VALUES (?, ?, ?)",
            [product_name, detail, price]
        );
        connection.release();
        res.status(201).json({ message: 'Data inserted successfully', insertedId: result.insertId });

    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }

};




exports.update = async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params;
        const { product_name, detail, price } = req.body;
        const connection = await dbConn.getConnection();
        const [result] = await connection.execute(
            "UPDATE online_product SET product_name = ?, detail = ?, price = ?, update_date = NOW() WHERE product_id = ?",
            [product_name, detail, price, id]
        );
        connection.release();
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'not found' });
        }
        const currentTime = new Date().toLocaleString();
        res.status(200).json({ message: 'Data updated successfully', updated_at: currentTime });

    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }

};



exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await dbConn.getConnection();
        const [result] = await connection.execute(
            "DELETE FROM online_product WHERE product_id = ?",
            [id]
        );
        connection.release();
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'not found' });
        }
        const currentTime = new Date().toLocaleString();
        res.status(200).json({ message: 'Data deleted successfully', deleted: currentTime });

    } catch (error) {
        console.log(error);
        res.status(500).send('server error');
    }
};


exports.search = async (req, res) => {
    try {
        const { query } = req.query;
        const connection = await dbConn.getConnection();
        const [rows] = await connection.execute(
            "SELECT * FROM online_product WHERE product_name LIKE ?",
            [`%${query}%`]
        );
        connection.release();
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};