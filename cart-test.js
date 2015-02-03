var expect = require('chai').expect;

describe('cart.js', function() {
    it('should be able to add an item', function(done) {

        var cart = require('./cart');

        var item = {"something":1};

        cart.add(item);

        expect(cart.getAll()).to.include(item);

        done();
    });

    it('should not affect other cart\'s contents', function(done) {

        var cart1 = require('./cart');
        var cart2 = require('./cart');

        var item = {"price":2};

        cart1.add(item);

        expect(cart1.getAll()).to.not.equal(cart2.getAll());

        done();
    });
});
