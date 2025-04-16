/**Программа представляет собой простую систему управления запасами, которая
 * предназначена для отслеживания и управления коллекцией продуктов, хранящихся в глобальном массиве инвентаря . 
 * Каждый продукт представляет собой объект с именем (строка, хранящаяся в нижнем регистре) и количеством (числом). 
 * Система предоставляет три основные функции:Программа обрабатывает сравнения имен без учета регистра, сохраняет названия продуктов
 * в нижнем регистре и поддерживает добавление, обновление и удаление продуктов с соответствующей обратной связью. */
const inventory = [];

function findProductIndex(name) {
    let lowerName = name.toLowerCase();
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === lowerName) {
            return i;
        }
    }
    return -1; 
}
function addProduct(product) {
    let existingProduct = null;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === product.name.toLowerCase()) {
            existingProduct = inventory[i];
            break;
        }
    }
    if (existingProduct) {
        existingProduct.quantity += product.quantity;
        console.log(`${product.name.toLowerCase()} quantity updated`);
        return `${product.name.toLowerCase()} quantity updated`;
    } else {
        const newProduct = { name: product.name.toLowerCase(), quantity: product.quantity };
        inventory.push(newProduct);
        console.log(`${product.name.toLowerCase()} added to inventory`);
        return `${product.name.toLowerCase()} added to inventory`;
    }
}

function removeProduct(productName, quantity) {
    let existingProduct = null;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === productName.toLowerCase()) {
            existingProduct = inventory[i];
            break;
        }
    }
    if (!existingProduct) {
        console.log(`${productName.toLowerCase()} not found`);
        return `${productName.toLowerCase()} not found`;
    }
    if (existingProduct.quantity < quantity) {
        console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${existingProduct.quantity}`);
        return `Not enough ${productName.toLowerCase()} available, remaining pieces: ${existingProduct.quantity}`;
    }
    existingProduct.quantity -= quantity;
    if (existingProduct.quantity === 0) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i] === existingProduct) {
                inventory.splice(i, 1);
                break;
            }
        }
    }
    console.log(`Remaining ${productName.toLowerCase()} pieces: ${existingProduct.quantity}`);
    return `Remaining ${productName.toLowerCase()} pieces: ${existingProduct.quantity}`;
}

inventory.push({ name: "flour", quantity: 5 }, { name: "rice", quantity: 5 });
console.log(removeProduct("FLOUR", 3));
console.log(removeProduct("FLOUR", 10));
console.log(removeProduct("RicE", 2));

console.log(addProduct({ name: "flour", quantity: 100 }));
console.log(findProductIndex("FLOUR"));
console.log(findProductIndex("meat"));