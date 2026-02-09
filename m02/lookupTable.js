const products = [
  {
    id: "p1",
    name: "Wireless Bluetooth Earbuds",
    category: "Electronics",
    price: 39.99,
    quantity: 120,
    brand: "SoundMax",
    rating: 4.5,
  },
  {
    id: "p2",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.5,
    quantity: 45,
    brand: "KeyPro",
    rating: 4.7,
  },
  {
    id: "p3",
    name: "Gaming Mouse",
    category: "Electronics",
    price: 29.99,
    quantity: 78,
    brand: "PixelGear",
    rating: 4.3,
  },
  {
    id: "p4",
    name: "Running Shoes",
    category: "Footwear",
    price: 64.99,
    quantity: 60,
    brand: "RunFast",
    rating: 4.4,
  },
  {
    id: "p5",
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 14.99,
    quantity: 200,
    brand: "UrbanWear",
    rating: 4.1,
  },
  {
    id: "p6",
    name: "Office Chair",
    category: "Furniture",
    price: 129.99,
    quantity: 25,
    brand: "ComfortSeat",
    rating: 4.6,
  },
];

const lookupTable = products.reduce((table,product)=>{
table[product.id]=product;
return table
},{})
console.log(lookupTable)

//order of n
const findProduct = products.find(product=> product.id === "p3")
console.log("finded products",findProduct)
// order of constant 
const findProductInTable = lookupTable['p3']
console.log("table data",findProductInTable)