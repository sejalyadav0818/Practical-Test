import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCreatePage from './pages/ProductCreatePage';
import ProductListPage from './pages/ProductListPage';
import ListCartPage from './components/ProductList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<ProductCreatePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<ListCartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
