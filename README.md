# IT Practical Test For MERN 

This project consists of Node.js backend APIs (MongoDB, Mongoose, TypeScript) and a React.js frontend (React, Redux, Redux-thunk, Bootstrap) to manage products and a shopping cart.

## Backend (Node.js)

### Prerequisites

- Node.js installed
- MongoDB server running

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies:

```bash
cd backend
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory with the following content:

```env
MONGODB_URI=your-mongodb-uri
PORT=3000
```

Replace `your-mongodb-uri` with the actual MongoDB connection string.

4. Run the server:

```bash
npm start
```

### Endpoints

- **Add Product**

  - Endpoint: `POST /api/products`
  - Request Body:

    ```json
    {
      "name": "Product Name",
      "image": "product-image.jpg",
      "description": "Product Description",
      "quantity": 10,
      "unitPrice": 29.99
    }
    ```

- **List Products**

  - Endpoint: `GET /api/products`

- **Add to Cart**

  - Endpoint: `POST /api/cart`
  - Request Body:

    ```json
    {
      "productId": "product-id",
      "quantity": 2
    }
    ```

- **Update Cart Item Quantity**

  - Endpoint: `PUT /api/cart/:itemId`
  - Request Body:

    ```json
    {
      "quantity": 5
    }
    ```

- **List Cart**

  - Endpoint: `GET /api/cart`

## Frontend (React.js)

### Prerequisites

- Node.js installed

### Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open your browser and go to `http://localhost:3000` to view the React app.

### Pages

- **Product Create Page**

  - URL: `/create`
  - Form to add a new product with fields: Name, Image, Description, Quantity, Unit Price.

- **Product List Page**

  - URL: `/products`
  - Displays a list of products with an "Add to Cart" button for each product.

- **Cart Page**

  - URL: `/cart`
  - Shows selected products with quantity and unit price.
  - Displays the total price.
  - Allows adding or updating the selected quantity.

