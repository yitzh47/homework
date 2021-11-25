(async function () {
    'use strict';

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(customerName, customerAddress) {
            this.customerName = customerName;
            this.customerAddress = customerAddress;
            this.items = [];
        }
        addItem(item) {
            this.items.push(item);
        }
        get total() {
            let total = 0;
            for (let i = 0; i < this.items.length; i++) {
                total += this.items[i].price * this.items[i].quantity;
            }
            return total;
        }
    }

    const ordersHtml = document.getElementById('orders');

    async function loadOrders() {
        let response = await fetch('quiz.json');
        let orders = await response.json();
        return orders;
    }

    async function processOrders() {

        let orders = await loadOrders();
        for (let i = 0; i < orders.length; i++) {
            let order = new Order(orders[i].customer, orders[i].address);
            for (let j = 0; j < orders[i].items.length; j++) {
                let o = orders[i].items[j];
                let price = (o.total / o.quantity).toFixed(2);
                order.addItem(new Item(o.item, price, o.quantity));
            }
            displayHtml(order);
        }
    }

    function displayHtml(order) {
        const orderInstance = document.createElement('div');
        //Using innerHTML as apposed to innerText, because I am assuming valadition was done before entering the data to a json file.
        orderInstance.innerHTML = "<hr>";
        orderInstance.innerHTML += `<h4>Customer: ${order.customerName}</h4>`;
        orderInstance.innerHTML += `<h4>Address: ${order.customerAddress}</h4>`;
        orderInstance.innerHTML += `<h4>Total: ${order.total}</h4>`;
        orderInstance.innerHTML += "<br>";
        orderInstance.innerHTML += "<h4 class='itemsHeader'>Items:</h4>";
        orderInstance.innerHTML += "<ul>";
        for (let i = 0; i < order.items.length; i++) {
            orderInstance.innerHTML += `<li class='undecorated'>Item: ${order.items[i].name}</li>`;
            orderInstance.innerHTML += `<li class='undecorated'>Quantity: ${order.items[i].quantity}</li>`;
            orderInstance.innerHTML += `<li class='undecorated'>Price: ${order.items[i].price}</li>`;

            if (i < order.items.length - 1) {
                orderInstance.innerHTML += "<br>";
            }

        }
        orderInstance.innerHTML += "</ul>";
        ordersHtml.appendChild(orderInstance);
    }

    await processOrders();


}());