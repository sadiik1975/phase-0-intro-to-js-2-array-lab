// helpers.js

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

module.exports = {
    destructivelyAppendCat,
    destructivelyPrependCat,
    cats // Exporting cats array for testing purposes
};
