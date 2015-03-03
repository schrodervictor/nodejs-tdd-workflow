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
    describe('#add(item)', function() {

        it('should accept the inclusion of items', function(done) {

            var collection1 = collection.create();
            var item1 = item.create({
                name: 'Item 1',
                price: 20
            });

            collection1.add(item1);

            expect(collection1.getAll()).to.include(item1);

            done();

        });

    });

    describe('#getAll()', function() {

        it('should return an array of items', function(done) {

            var collection1 = collection.create();
            var item1 = item.create({
                name: 'Item 1',
                price: 20
            });

            collection1.add(item1);

            expect(collection1.getAll()).to.be.instanceOf(Array)
                .and.to.be.not.empty;

            done();

        });

        it('should return an empty array when have no items', function(done) {

            var collection1 = collection.create();

            expect(collection1.getAll()).to.be.instanceOf(Array)
                .and.to.be.empty;

            done();

        });
    });
});


