const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Sample product data
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 150 },
  { name: 'Keyboard', price: 80 }
];

// Route to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
