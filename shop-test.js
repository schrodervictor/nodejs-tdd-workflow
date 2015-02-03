var expect = require('chai').expect;
var shop = require('./shop');

describe('shop.js', function() {
    it('should be able to add an item', function(done) {

        var cart = shop.createCart();

        var item = {"something":1};

        cart.add(item);

        expect(cart.getAll()).to.include(item);

        done();
    });

    it('should not affect other cart\'s contents', function(done) {

        var cart1 = shop.createCart();
        var cart2 = shop.createCart();

        var item = {"price":2};

        cart1.add(item);

        expect(cart1.getAll()).to.not.equal(cart2.getAll());

        done();
    });
});
