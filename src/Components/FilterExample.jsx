// Task: Show only instock products
import React from "react";

export default function  FilterExample (){
    //create a dummy database
    const products = [
        {id: 1, name:"Laptop", instock:true},
        {id: 2, name:"HeadPhones", instock:false},
        {id: 3, name:"Keyboard", instock:true},
        {id: 4, name:"Mouse", instock:false},
        {id: 5, name:"Monitor", instock:true},
    ]
// return only the products that are instock
const instockProducts = products.filter(product=>product.instock)

return(
    <div>
        <h3>Avaiable products</h3>
        <ul>
            {instockProducts.map((product)=>(
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    </div>
)
}


