const Product = {
    items: [
        {   id : "00001", product_name: "Prod 1",  price: 888  },
        {   id : "00002", product_name: "Prod 2",  price: 816  },
        {   id : "00003", product_name: "Prod 3",  price: 883  },
        {   id : "00004", product_name: "Prod 4",  price: 599  },
        {   id : "00005", product_name: "Prod 5",  price: 205  },
        {   id : "00006", product_name: "Prod 6",  price:  10  },
        {   id : "00007", product_name: "Prod 7",  price: 495  },
        {   id : "00008", product_name: "Prod 8",  price: 378  },
        {   id : "00009", product_name: "Prod 9",  price: 263  },
        {   id : "00010", product_name: "Prod 10", price: 857  }
    ],
    createList () {
        for (let prop of this.items) {
            let parentElem = document.getElementById("catalog");
            const elem = document.createElement('div');
            elem.setAttribute("id", prop.id);
            elem.setAttribute("class", "product");
            elem.innerHTML = 'Название: ' + prop.product_name + ', цена: ' + prop.price + ' рублей';
            parentElem.appendChild(elem);
        }
    }
}

const cart = {
    items: [],
    insertItem (item) {
        this.items.push(item);
    },
    getAmount () {
        let amount = 0;
        for (let prop of this.items) {
            amount += prop.price;
        }
        return amount;
    },
    getCount () {
        return this.items.length;
    },
    createCart () {
        let elem = document.getElementById("cart");
        if (this.getCount() === 0) {
            elem.innerHTML = 'Корзина пуста';
        } else {
            elem.innerHTML = 'В корзине : ' + this.getCount() + ' товаров, на сумму: ' + this.getAmount() + ' рублей';
        }
    }
}

document.onclick = function (event) {
    if (event.target.className === 'product') {
        let item = Product.items.find(item => item.id === event.target.id);
        cart.insertItem(item);
        cart.createCart();
    }
}

cart.createCart();
Product.createList ();

