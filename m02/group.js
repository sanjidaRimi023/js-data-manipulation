const productSales = [
  "Electronics",
  "Clothing",
  "Electronics",
  "Books",
  "Clothing",
  "Electronics",
  "Books",
  "Clothing",
  "Clothing",
  "Furniture",
  "Books",
  "Electronics",
];

//1 . initial empty obj
//2. if value already exist or not
//3. if exist then increse values
//4. or inial value 1

const productCount = productSales.reduce((table, product)=>{
  console.log(table, "" , product)
  if(table[product]){
    table[product]++
  }
  else{
    table[product]=+1
  }
  return table
},{})
console.log(productCount)