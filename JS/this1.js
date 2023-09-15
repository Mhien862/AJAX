class Product {
    constructor(name, price, amount) { 
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    addProduct (quantity) {
        this.amount = this.amount +quantity;
        console.log('add success')
    }
}


class Customer {
    constructor(name, quantityOfProducts)
    {
        this.name = name;
        this.quantityOfProducts = quantityOfProducts;
    }
    buyProduct (Product, quantity) {
        if (quantity > Product.amount) 
        return console.log("sold out")

        Product.amount = Product.amount - quantity;
        this.quantityOfProducts = this.quantityOfProducts + quantity;
        console.log(" buy succees ");
    }
}

const shirt = new Product('Ao polo...', 150000, 10)
shirt.addProduct(5);

const customer = new Customer("Hien", 20)
customer.buyProduct(shirt, 2);
customer.buyProduct(shirt, 5);

console.log(customer, shirt);

