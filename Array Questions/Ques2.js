/* Question 2:
For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% on them.
Change the array to store the final prices after applying offer.
*/

let prices = [250, 645, 300, 900, 50];
let finalprice = [];

for(let i = 0; i < prices.length; i++){
    discount = prices[i] - (prices[i] * 0.1); //discount = price - (price * 0.1)
    finalprice.push(discount); //pushing elements to a new array.
}
console.log("The discounted prices are: ")
console.log(finalprice);