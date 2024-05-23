import axios from 'axios';

export const getdata = async () => {

    return await axios.get('http://localhost:5000/api/product')
}
export const create = async (data) => {

    return await axios.post('http://localhost:5000/api/product', data)
}

export const update = async (product_id, data) => {
    return await axios.put(`http://localhost:5000/api/product/${product_id}`, data);
};

export const read = async (product_id) => {

    return await axios.get('http://localhost:5000/api/product', product_id)
}

export const remove = async (product_id) => {

    return await axios.delete(`http://localhost:5000/api/product/${product_id}`)
}

export const searchProducts = async (searchTerm) => {
    return await axios.get(`http://localhost:5000/api/products/search`, {
        params: { query: searchTerm }
    });
};