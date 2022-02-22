
const productList = {
    products : [
        {
            title: 'product Mew',
            imageURL: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 13.00,
            description: 'some intresting cooking stuff',
        },
        {
            title: 'Wow effect',
            imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 84.4,
            description: 'oh. this is amazing thing, what you really want',
        },
        {
            title: 'Grammar book',
            imageURL: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            price: 200.17,
            description: 'no description',
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageURL}" alt="${prod.title}">
                    <h2> ${prod.title} </h2>
                    <h4> ${prod.price} </h4>
                    <p> ${prod.description} </p>
                </div>
            `
            prodEl.className = 'product-item';
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}


productList.render()