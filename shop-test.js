var expect = require('chai').expect;
var shop = require('./shop');

describe('shop.js', function() {
    it('should be able to add an item', function(done) {

        var cart = shop.createCart();

        var item = {"something":1};

        cart.add(item, function() {
            expect(cart.getAll()).to.include(item);
            done();
        });

    });

    it('should not affect other cart\'s contents', function(done) {

        var cart1 = shop.createCart();
        var cart2 = shop.createCart();

        var item = {"price":2};

        cart1.add(item, function() {
            expect(cart1.getAll()).to.not.equal(cart2.getAll());
            done();
        });

    });

    it('should calcutate the subtotal', function(done) {

        var cart = shop.createCart();

        var item1 = {
            "price":1
        };

        var item2 = {
            "price": 3
        };

        function steps(callback) {
            cart.add(item1, function(err) {
                if(err) return callback(err);
                step1(callback);
            });
        }

        function step1(callback) {
            cart.add(item2, function(err) {
                if(err) return callback(err);
                step2(callback);
            });
        }

        function step2(callback) {
            expect(cart.getSubtotal()).to.equal(4);
            callback();
        }

        steps(done);
    });
});
