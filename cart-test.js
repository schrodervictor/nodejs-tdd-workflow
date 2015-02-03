var expect = require('chai').expect;
var cart = require('./cart');

describe('cart.js', function() {
    it('should be able to add an item', function(done) {

        var cart1 = cart.createCart();

        var item = {"something":1};

        cart1.add(item);

        expect(cart1.getAll()).to.include(item);

        done();
    });

    it('should not affect other cart\'s contents', function(done) {

        var cart1 = cart.createCart();
        var cart2 = cart.createCart();

        var item = {"price":2};

        cart1.add(item);

        expect(cart1.getAll()).to.not.equal(cart2.getAll());

        done();
    });
});
