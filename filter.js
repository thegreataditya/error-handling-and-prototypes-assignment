function filterByCateogory(arr) {
  return function (cat) {
    const ans = arr.filter((product) => product.cateogory === cat);
    return ans;
  };
};

const products = [
  { name: "Shirt", cateogory: "Clothing" },
  { name: "Pant", cateogory: "Clothing" },
  { name: "Hat", cateogory: "Accessories" },
  { name: "Sunglasses", cateogory: "Accessories" },
  { name: "Macbook Pro", cateogory: "Technology" },
  { name: "Iphone 14 Pro", cateogory: "Technology" }
];

let clothingProducts = filterByCateogory(products)("Clothing");

console.log(clothingProducts);