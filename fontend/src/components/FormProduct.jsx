import React, { useState, useEffect } from 'react';
import { getdata, remove } from '../api/api';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Swal from 'sweetalert2';


const FormProduct = () => {
    const [data, setData] = useState([]);
    const [showAddProductPopup, setShowAddProductPopup] = useState(false);
    const [showEditProductPopup, setShowEditProductPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);// สร้าง state สำหรับเก็บข้อมูลสินค้าที่ถูกเลือก

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const res = await getdata();
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddProductClick = () => {
        setShowAddProductPopup(true);
    };

    const handleClosePopup = () => {
        setShowAddProductPopup(false);
    };

    const handleEditPopup = () => {
        setShowEditProductPopup(true);
    };

    const handleEditClosePopup = () => {
        setShowEditProductPopup(false);
        //  setSelectedProduct(null);
    };

    const handleEditButton = (product) => {
        console.log(product)
        setSelectedProduct(product);
        handleEditPopup();
    };






    //delelte
    const handleRemove = async (product_id) => {
        const isConfirm = await Swal.fire({
            title: "คุณต้องการลบใช่หรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            background: '#fff', // สีพื้นหลังของ SweetAlert
            color: '#000' // สีข้อความใน SweetAlert
        }).then((result) => {
            return result.isConfirmed
        })

        if (!isConfirm) {
            return;
        }

        try {
            await remove(product_id);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButtonColor: '#3085d6'
            })
            loadData(); // โหลดข้อมูลใหม่หลังจากการลบ
        } catch (err) {
            console.error('Error deleting product:', err);
            Swal.fire({
                text: data.message,
                icon: 'error'
            })
        }
    };


    return (
        <div>
            <div className="p-4 flex justify-end">
                <button
                    type="button"
                    className="btn btn-primary mr-[20%]"
                    onClick={handleAddProductClick}
                >
                    Add Product
                </button>
            </div>

            <div className="table-container">
                <center>
                    <table className="table table-hover" style={{ width: '60%' }}>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Detail</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? (
                                data.map((item, index) => (
                                    <tr key={index} className="hover">
                                        <td>{index + 1}</td>
                                        <td data-label="Name">{item.product_name}</td>
                                        <td data-label="Detail">{item.detail}</td>
                                        <td data-label="Price">{item.price}</td>
                                        <td data-label="Action">
                                            <button
                                                type="button"
                                                className="btn btn-warning mr-3 sm:btn-sm md:btn-md"
                                                onClick={() => handleEditButton(item)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-error sm:btn-sm md:btn-md"
                                                onClick={() => handleRemove(item.product_id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : null}
                        </tbody>
                    </table>
                </center>
            </div>

            {showAddProductPopup && <AddProduct onClose={handleClosePopup} />}
            {/* //ส่งข้อมูลสินค้าที่ถูกเลือกไปที่ EditProduct */}
            {showEditProductPopup && <EditProduct onClose={handleEditClosePopup} product_id={selectedProduct?.product_id} productData={selectedProduct} />}

        </div>

    );
};

export default FormProduct;
