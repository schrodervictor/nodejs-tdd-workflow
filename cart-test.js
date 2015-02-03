var expect = require('chai').expect;

describe('cart.js', function() {
    it('should be able to add an item', function(done) {

        var cart = require('./cart');

        var item = {"something":1};

        cart.add(item);

        expect(cart.getAll()).to.include(item);

        done();
    });
});
