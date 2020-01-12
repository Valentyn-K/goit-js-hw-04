///use strict

//////-----1-----

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     };
// };

// repeat(5, console.log);

/////-----2-----

// const labels = [];

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     };
// };

// const createLabel = function (index) {
//     labels.push(`label${index+1}`);
// }

// repeat(5, createLabel);

// console.log(labels);

/////-----3-----Фильтрация (перебор) массива-------

// const filter = function (array, testCallBack) {
//     const result = [];

//     for (const el of array) {
//         const passed = testCallBack(el);

//         if (passed) {
//             result.push(el);
//         };

//         return result;

//     };
// };

// const fnGt3 = function (el) {
//     return el >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fnGt3));

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (el) {
//     return el >= 3;
// }));

// ---------^----- Повернуло пустий масив -----^-------------

//------4----Стрілочна функція--------------

// const fn = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// console.log(fn(2, 3));

// const arrowFn = (a, b) => a + b;
// console.log(arrowFn(3, 4));

///////-----5-----Фильтрация (перебор) массива стрелочной функцией-------


// const filter = (array, testCallBack) => {
//     const result = [];

//     for (const el of array) {
//         const passed = testCallBack(el);

//         if (passed) {
//             result.push(el);
//         };

//         return result;

//     };
// };

// const fnGt3 = function (el) {
//     return el >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], el => el >= 3));


/////-----HW4--------task-1------

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//         this.discount = value;
//     },
//     showOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost;
//         this.orders.push(order);
//     },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

////---------HW4-------task-2---------------

const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);
        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);

        this.items = this.items.filter(item => item !== itemName);
        // items = this.items.filter(item => item !== itemName);

    },
};

const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action.call(this, itemName);
};

invokeInventoryAction.bind(inventory, 'Medkit', inventory.add)();
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']