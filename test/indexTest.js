const { expect } = require('chai');
const { destructivelyAppendCat, destructivelyPrependCat, cats } = require('./helpers.js'); // Importing functions and cats array from helpers.js

describe('Array functions', function () {
    beforeEach(function () {
        cats.length = 0; // Clear the cats array
        cats.push('Milo', 'Otis', 'Garfield'); // Re-populate the array
    });

    describe('destructivelyAppendCat(name)', function () {
        it('appends a cat to the end of the cats array', function () {
            destructivelyAppendCat('Ralph');
            expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
        });
    });

    describe('destructivelyPrependCat(name)', function () {
        it('prepends a cat to the beginning of the cats array', function () {
            destructivelyPrependCat("Bob");
            expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
        });
    });

    // Other test cases...
});

