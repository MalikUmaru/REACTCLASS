//Create a dummmy database
const products = [
    {"id":2, "name":"Laptop", "price":3000},
    {"id":2, "name":"Fast Charger", "price":4000},
    {"id":2, "name":"Riggs", "price":8100},
    {"id":2, "name":"Cannon Camera", "price":7000},
]

//Contoller for fetching all products

export const getProducts = (req, res)=>{
    res.json(products)
}

//Controller for creating a new product
export const createProduct = (req, res)=>{
//get the request body
const newProduct = req.body;

//save to database
products.push(newProduct);

//send a response 
res
}