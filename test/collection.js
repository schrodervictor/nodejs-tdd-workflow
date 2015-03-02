var expect = require('chai').expect;
var item = require('../item');
var collection = require('../collection');

describe('collection.js', function() {
    describe('#create()', function() {

        it('should create an instance of "Collection"', function(done) {

            var collection1 = collection.create();
            var Collection = collection.constructor;

            expect(collection1).to.be.an.instanceOf(Collection);
            done();
        });

    });
});


