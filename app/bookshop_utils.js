function addVAT(price) {

    return price + (0.2 * price);
};

function getFullName(a,b) {
    const fullName =("Haruki " + "Murakami")
    return fullName 
}
function makeHalfPrice(price) {
    return price - (0.5 * price)
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice
};

