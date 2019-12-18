/**
 * build the DOM elements needed for each of your products. Either copy and paste your code from the products/cart
 * example OR rewrite the code below before starting to write the JavaScript that will build the DOM nodes needed.
 * Please feel free to use the method in which you clone the template tag OR the method in which you build each DOM node
 * with document.createElement()
 **/ 


const d = document;

function Product(id, title, price, author, description){
    this.id = id;
    this.title = title;
    this.price = price;
    this.author = author;
    this.description = description;

}

let products = [
    new Product(0, "101 Potato Haikus", 9.99, "Brett", "Haikus about potatoes"),
    new Product(1, "101 Coffee Haikus", 9.99, "Brett", "Haikus about coffee"),
    new Product(2, "101 Weed Haikus", 9.99, "Brett", "Haikus about weed"),
    new Product(3, "101 Mushrooms Haikus", 9.99, "Brett", "Haikus about mushrooms"),
    new Product(4, "101 LSD Haikus", 9.99, "Brett", "Haikus about LSD"),
    new Product(5, "101 DMT Haikus", 9.99, "Brett", "Haikus about DMT"),
];

function buildCard(product){
    let cardTemplate = d.getElementById('cardTemplate'),
        clone = d.importNode(cardTemplate.content, true),
        cardElement = clone.firstElementChild;


    console.log(cardElement);
    cardElement.id = `product-${product.id}`;
    
    cardElement.querySelector('.title').innerText = product.title;
    cardElement.querySelector('.price').innerText = product.price;
    cardElement.querySelector('.author').innerText = product.author;
    cardElement.querySelector('.content').innerText = product.description;
    
    console.log(cardElement);
    d.getElementById('products').appendChild(cardElement);
}

products.forEach(product => buildCard(product));