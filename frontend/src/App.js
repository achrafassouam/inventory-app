import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryPage from './pages/InventoryPage';
import AddItemPage from './pages/AddItemPage';
import SellItemPage from './pages/SellItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/add" element={<AddItemPage />} />
        <Route path="/sell" element={<SellItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
