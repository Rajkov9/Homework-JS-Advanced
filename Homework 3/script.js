function Food(name, category, hasDiscount, price){
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let prods = [
    new Food("Steak", "Meat", false, 21),
    new Food("Fish", "Seafood", true, 20),
    new Food("Apples", "Fruit", true, 16),
    new Food("Plums", "Fruit", true, 11),
    new Food("Asparagus", "Vegetable", false, 25),
    new Food("Cabbage", "Vegetable", true, 22),
    new Food("Feta", "Dairy", false, 23),
    new Food("Blue cheese", "Dairy", false, 24),
    new Food("Pitaya", "Fruit", true, 17),
    new Food("Beef", "Meat", false, 28),
    new Food("Ham", "Meat", true, 19),
    new Food("Chicken", "Poultry", true, 14),
    new Food("Shrimp", "Seafood", true, 11),
    new Food("Croissant", "Bread", false, 15),
    new Food("Bagle", "Food", true, 12)
];

let vowels = ["a", "e", "i", "o", "u"];

let pricesOver20 = prods.filter( prod => prod.price > 20);
let discountedProd = prods.filter( prod => prod.hasDiscount);
let foodDiscount = prods.filter( prod => prod.category === 'Food' && prod.hasDiscount).map(prod => prod.name);
let findNameAndPriceOfAllProductsWithANameStartingWithAVowelThatDontHaveADiscount = prods.filter(prod => prod.name.toLowerCase(vowels) && !prod.hasDiscount).map(prod => prod.name);

console.log("Prices of food that are over 20:")
console.log(pricesOver20);
console.log("Food that has a discount:")
console.log(discountedProd);
console.log(`Prices of products that have a dicount: ${foodDiscount}`);
console.log(`Name and price of food that does not have a discount ${findNameAndPriceOfAllProductsWithANameStartingWithAVowelThatDontHaveADiscount}`);