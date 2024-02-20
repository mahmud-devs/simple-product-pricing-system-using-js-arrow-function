/*

=== product pricing system using javascript function ===

*/

const originalPrice = (unitPrice, unitPriduct) => {
    let priceOriginal = unitPrice * unitPriduct;
    return priceOriginal;
};

const priceWithVat = (returnPriceOriginal, vat) => {
    let vatAddedPrice =
        (returnPriceOriginal * vat) / (100 + vat) + returnPriceOriginal;
    return Math.ceil(vatAddedPrice);
};

const finalPrice = (returnVatAddedPrice, discount) => {
    let priceFinal =
        returnVatAddedPrice - (returnVatAddedPrice * discount) / 100;
    return Math.ceil(priceFinal);
};

// ============ perameters =============

let price = prompt("Enter your price range:");
let unitPrice = Number(price);

let product = prompt("Enter product quantity:");
let unitPriduct = parseInt(product);

let vat = 15;

let discount = 5;