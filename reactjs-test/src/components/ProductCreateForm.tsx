import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

const ProductCreatePage: React.FC = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: '',
    image: '',
    description: '',
    quantity: 0,
    unitPrice: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProduct(productData));
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Unit Price:</label>
          <input
            type="number"
            name="unitPrice"
            value={productData.unitPrice}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductCreatePage;
