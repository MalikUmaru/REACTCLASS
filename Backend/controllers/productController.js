// Create a dummy database
const products = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Fast Charger", price: 4000 },
  { id: 3, name: "Riggs", price: 8100 },
  { id: 4, name: "Cannon Camera", price: 7000 },
  { id: 5, name: "Fast Charger", price: 4000 },
];

// Controller for fetching all product
export const getProducts = (req, res) => {
  res.json(products);
};

// controller  for a creating a new product
export const createProduct = (req, res) => {
  //get the request body
  const newProduct = req.body;

  // save to database
  products.push(newProduct);

  //send a response
  res.statu(201).json({ message: "Product uploaded", product: newProduct });
};

// controller for getting a product by id
export const getProductById = (req, res) => {
  const { name } = req.params;
  const singleProduct = products.filter((product) => product.name == name);
  res.json(singleProduct);
};
