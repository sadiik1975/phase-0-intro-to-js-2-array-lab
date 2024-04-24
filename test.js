// test.js
const { expect } = require('chai');
const {
    cats,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
} = require('./index'); // Adjust the path as necessary

describe('Cats Array', function() {
    describe('Modifications', function() {
        it('should append a cat to the end of the array', function() {
            appendCat('Bella');
            expect(cats).to.include('Bella');
        });

        // Add more tests as needed
    });
});
