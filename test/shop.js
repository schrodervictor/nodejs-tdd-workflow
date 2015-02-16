var expect = require('chai').expect;
var shop = require('../shop');
var item = require('../item');

describe('shop.js', function() {
    it('should be able to add an item', function(done) {

        var cart = shop.createCart();

        var item1 = item.create({"price":1});

        cart.add(item1, function(err) {
            if(err) return done(err);
            cart.getAll(function(err, cartContents) {
                if(err) return done(err);
                expect(cartContents).to.include(item1);
                done();
            });
        });

    });

    it('should not affect other cart\'s contents', function(done) {

        var cart1 = shop.createCart();
        var cart2 = shop.createCart();

        var item1 = item.create({"price":2});

        function steps(callback) {
            cart1.add(item1, function(err) {
                if(err) return callback(err);
                step1(callback);
            });
        }

        function step1(callback) {
            cart1.getAll(function(err, contents1) {
                if(err) return callback(err);
                step2(contents1, callback);
            });
        }

        function step2(contents1, callback) {
            cart2.getAll(function(err, contents2) {
                if(err) return callback(err);
                expect(contents1).to.not.equal(contents2);
                callback();
            });
        }

        steps(done);
    });

    it('should calcutate the subtotal', function(done) {

        var cart = shop.createCart();

        var item1 = item.create({
            "price":1
        });

        var item2 = item.create({
            "price": 3
        });

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
            cart.getSubtotal(function(err, subtotal) {
                if(err) return callback(err);
                expect(subtotal).to.equal(4);
                callback();
            });
        }

        steps(done);
    });

    it.skip('should callback an error when item has no price defined', function(done) {

        function test() {
            var cart = shop.createCart();
            var item1 = item.create({});

            cart.add(item1, function(err) {
                if(err) throw err;
            });
        }

        expect(test).to.throw('Item to add to cart must have a price');

        done();
    });

    it('should be able to empty the cart contents', function(done) {
        var cart = shop.createCart();

        var item1 = item.create({"price":10});

        function steps(callback) {
            cart.add(item1, function(err) {
                if(err) return callback(err);
                step1(callback);
            });
        }

        function step1(callback) {
            cart.getAll(function(err, contents) {
                if(err) return callback(err);
                expect(contents).to.include(item1);
                step2(callback);
            });
        }

        function step2(callback) {
            cart.empty(function(err) {
                if(err) return callback(err);
                step3(callback);
            });
        }

        function step3(callback) {
            cart.getAll(function(err, contents) {
                if(err) return callback(err);
                expect(contents).to.be.empty();
                callback();
            });
        }

        steps(done);

    });

    it('should show the amount of items in the cart', function(done) {

        var cart = shop.createCart();

        var item1 = item.create({"price":10});
        var item2 = item.create({"price":20});
        var item3 = item.create({"price":30});
        var item4 = item.create({"price":40});

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
            cart.add(item3, function(err) {
                if(err) return callback(err);
                step3(callback);
            });
        }

        function step3(callback) {
            cart.add(item4, function(err) {
                if(err) return callback(err);
                step4(callback);
            });
        }

        function step4(callback) {
            cart.count(function(err, quantity) {
                if(err) return callback(err);
                expect(quantity).to.equal(4);
                callback();
            });
        }

        steps(done);

    });

    it('should be able to remove a specific item from the cart', function(done) {

        var cart = shop.createCart();

        var item1 = item.create({"price":10});
        var item2 = item.create({"price":20});

        function steps(callback) {
            cart.add(item1, function(err) {
                if(err) return callback(err);
                step1(callback);
            });
        }

        function step1(callback) {
            cart.add(item2, function(err) {
                if(err) return callback(err);
                cart.getAll(function(err, contents) {
                    if(err) return callback(err);
                    expect(contents).to.include(item1);
                    expect(contents).to.include(item2);
                    step2(callback);
                });
            });
        }

        function step2(callback) {
            cart.remove({"price": 20}, function(err) {
                if(err) return callback(err);
                cart.getAll(function(err, contents) {
                    if(err) return callback(err);
                    expect(contents).to.include(item1);
                    expect(contents).to.not.include(item2);
                    callback();
                });
            });
        }

        steps(done);

    });

    it('remove method should remove only items that match all query\'s key:value pairs', function(done) {

        var cart = shop.createCart();

        var item1 = item.create({"id": 1, "price":10});
        var item2 = item.create({"price":20});
        var item3 = item.create({"id": 3, "price":20});

        function steps(callback) {
            cart.add(item1, function(err) {
                if(err) return callback(err);
                cart.add(item2, function(err) {
                    if(err) return callback(err);
                    cart.add(item3, function(err) {
                        if(err) return callback(err);
                        step1(callback);
                    });
                });
            });
        }

        function step1(callback) {
            cart.getAll(function(err, contents) {
                if(err) return callback(err);
                expect(contents).to.include(item1);
                expect(contents).to.include(item2);
                expect(contents).to.include(item3);
                step2(callback);
            });
        }

        function step2(callback) {
            cart.remove({"id": 1}, function(err) {
                if(err) return callback(err);
                cart.getAll(function(err, contents) {
                    if(err) return callback(err);
                    expect(contents).to.not.include(item1);
                    expect(contents).to.include(item2);
                    expect(contents).to.include(item3);
                    callback();
                });
            });
        }

        steps(done);

    });
});
