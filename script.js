var totalBill=0;
var newElement=document.createElement('div');
newElement.style.backgroundColor='tan';
newElement.style.height='100%';
newElement.style.width='100%';
document.body.appendChild(newElement);
var groceryList=[
{
  name: 'milk',
  price: 3.59
},
{
  name: 'spinach',
  price: 2.00
},
{
  name: 'bananas',
  price: 1.50
},
{
  name: 'eggs',
  price: 3.00
},
{
  name: 'cheese',
  price: 4.69
},
{
  name: 'oranges',
  price: 2.19
},
{
  name: 'chicken',
  price: 7.45
},
{
  name: 'pistacios',
  price: 1.10
},
{
  name: 'oatmeal',
  price: 2.37
},
{
  name: 'water',
  price: 4.79
},
{
  name: 'chocolate',
  price: 5.59
}
]
groceryList.forEach(function(item){
  //console.log(item.name, item.price);
  var itemName=document.createElement('h3');
  itemName.style.color='black';
  itemName.innerText=item.name;
  newElement.appendChild(itemName);

  var itemPrice=document.createElement('li');
  itemPrice.style.color='red';
  itemPrice.innerText=item.price;
  newElement.appendChild(itemPrice);

  totalBill+=item.price;

});
var salesTax=totalBill*0.06;
var finalBill=salesTax+totalBill;

var totalCost=document.createElement('p');
totalCost.innerText= 'Subtotal: $' + totalBill.toFixed(2);
document.body.appendChild(totalCost);

var subTotal=document.createElement('p');
subTotal.innerText= 'Sales Tax: $' + salesTax.toFixed(2);
document.body.appendChild(subTotal);

var totalTotal=document.createElement('p');
totalTotal.innerText = 'Final Bill: $' + finalBill.toFixed(2);
document.body.appendChild(totalTotal);
