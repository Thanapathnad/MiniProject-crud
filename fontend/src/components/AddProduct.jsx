import React, { useState } from 'react';
// import axios from 'axios';
import { create } from '../api/api';
import Swal from 'sweetalert2';


const AddProduct = ({ onClose }) => {
    const [form, setForm] = useState({});


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);

        try {

            const res = await create(form);
            console.log(res.data);
            Swal.fire({
                title: "เพิ่มข้อมูลสำเร็จ!",
                icon: "success",
                confirmButtonColor: '#3085d6',
                background: '#fff', // สีพื้นหลังของ SweetAlert
                color: '#000'
            })
            setTimeout(() => {
                window.location.reload();
            }, 1500); //
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
                        <h1>เพิ่มข้อมูลสินค้า</h1>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">ชื่อสินค้า</span>
                            </div>
                            <input
                                name="product_name"
                                type="text"
                                placeholder="ชื่อสินค้า"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onChange={(e) => handleChange(e)}
                            />
                            <div className="label">
                                <span className="label-text">รายละเอียดสินค้า</span>
                            </div>
                            <input
                                name="detail"
                                type="text"
                                placeholder="รายละเอียดสินค้า"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onChange={(e) => handleChange(e)}
                            />
                            <div className="label">
                                <span className="label-text">ราคา</span>
                            </div>
                            <input
                                name="price"
                                type="text"
                                placeholder="ราคา"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onChange={(e) => handleChange(e)}
                            />
                             {/* <div className="label">
                                <span className="label-text">รูปภาพ</span>
                            </div>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                            /> */}
                        </label>
                        <button className="btn btn-sm btn-primary mt-10 mr-3">เพิ่มข้อมูล</button>
                        <button type="button" onClick={onClose} className="btn btn-sm btn-error">ปิด</button>


                    </form>

                </center>
            </div>
        </div>
    );
};

export default AddProduct;
