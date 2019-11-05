var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
var newItem = { 
  itemName: item,
  itemPrice: Math.floor(Math.random() * 100) + 1 
};
cart.push(newItem);
return `${item} has been added to your cart.`
 
}

function viewCart() {
  if (0<cart.length) {
    var string = 'In youf cart, you have'
    for(var i = 0; i < cart.length; i++){
      string = string + `${cart[i][itemName]} at $${cart[i][itemPrice]}`
      if (i === cart.length - 1){
        string = string + '.';
      }
      else {
        string = string +',';
      }
    }
    return(string)
  }
  else {
    return('Your shopping cart is empty.')
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
