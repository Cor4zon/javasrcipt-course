class Product {

    constructor(title, imageURL, price, description) {
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageURL}" alt="${this.product.title}">
                    <h2> ${this.product.title} </h2>
                    <h4> ${this.product.price} </h4>
                    <p> ${this.product.description} </p>
                </div>
            `
        prodEl.className = 'product-item';
        return prodEl;
    }
}
class ProductList {
    products = [
        new Product(
            'product Mew',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            13.00,
            'some intresting cooking stuff'
        ),

        new Product(
            'Wow effect',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            84.4,
            'oh. this is amazing thing, what you really want',
        ),

        new Product (
            'Grammar book',
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            200.17,
            'no description'
        )
    ]

    constructor() {}

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const prod of this.products) {
            const prodEl = new ProductItem(prod);

            prodList.append(prodEl.render());
        }
        renderHook.append(prodList);
    }

}

const app = new ProductList()
app.render();