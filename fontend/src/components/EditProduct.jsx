import React, { useState, useEffect } from 'react';
import { read, update } from '../api/api';
import Swal from 'sweetalert2';


const EditProduct = ({ onClose, product_id, productData }) => {


    const [data, setData] = useState({
        product_name: '',
        detail: '',
        price: ''
    });



    useEffect(() => {
        // console.log("productData:", productData);
        // console.log("Product ID:", product_id);
        if (productData) {
            setData(productData);
        } else if (product_id) {
            loadData(product_id);
        }
    }, [product_id, productData]);




    const loadData = async (product_id) => {
        try {
            const res = await read(product_id);
            setData(res.data);

        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        try {
            const res = await update(product_id, data);
            console.log(res.data);
            Swal.fire({
                title: "แก้ไขข้อมูลสำเร็จ!",
                icon: "success",
                confirmButtonColor: '#3085d6',
                background: '#fff', // สีพื้นหลังของ SweetAlert
                color: '#000'
            })
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } catch (err) {
            console.error('Error updating product:', err);
            Swal.fire({
                title: "ERROR",
                text: err.message,
                icon: 'error',
                color: '#000'
            })
        }
    };

    return (
        <div>
            <div className="overlay" onClick={onClose}></div>
            <div className="popup">
                <center>
                    <form onSubmit={handleSubmit}>
                        <h1>แก้ไขข้อมูลสินค้า</h1>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">ชื่อสินค้า</span>
                            </div>
                            <input
                                name="product_name"
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onChange={handleChange}
                                value={data.product_name}
                            />
                            <div className="label">
                                <span className="label-text">รายละเอียดสินค้า</span>
                            </div>
                            <input
                                name="detail"
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onChange={handleChange}
                                value={data.detail}
                            />
                            <div className="label">
                                <span className="label-text">ราคา</span>
                            </div>
                            <input
                                name="price"
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onChange={handleChange}
                                value={data.price}
                            />
                        </label>
                        <button className="btn btn-sm btn-primary mt-10 mr-3">แก้ไขข้อมูล</button>
                        <button type="button" onClick={onClose} className="btn btn-sm btn-error">ปิด</button>
                    </form>
                </center>
            </div>
        </div>
    );
};

export default EditProduct;
