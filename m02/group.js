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

const productCount = productSales.reduce((table, product) => {
  // console.log(table, "" , product)
  if (table[product]) {
    table[product]++;
  } else {
    table[product] = +1;
  }
  return table;
}, {});
// console.log(productCount)

// Scenario: You have a flat array of fruits data, and you need to group the fruits by category,
// calculating the total price and the number of items sold for each.
const fruitSales = [
  { category: "Pome", item: "Apple", price: 44, quantity: 2 },
  { category: "Berry", item: "Banana", price: 11, quantity: 1 },
  { category: "Citrus", item: "Orange", price: 5, quantity: 2 },
  { category: "Tropical", item: "Mango", price: 38, quantity: 3 },
  { category: "Berry", item: "Grapes", price: 80, quantity: 1 },
  { category: "Tropical", item: "Pineapple", price: 44, quantity: 5 },
];
//init empty onject
//init object category
// colculated total price

const fruitsSaleByCat = fruitSales.reduce((table, saleItem) => {
  const { category, price, quantity } = saleItem;
  let tableCat = table[category];
  if (!tableCat) {
    tableCat = {
      totalPrice: 0,
      totalItem: 0,
    };
    table[category]=tableCat
  }

  tableCat.totalPrice += price * quantity;
  tableCat.totalItem = +quantity;

  return table;
}, {});
console.log(fruitsSaleByCat);
