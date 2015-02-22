var expect = require('chai').expect;
var item = require('../item');

describe('item.js', function() {
    it('should be an instance of "Item"', function(done) {

        var item1 = item.create();
        var Item = item.constructor;

        expect(item1).to.be.an.instanceOf(Item);
        done();
    });

    it('should create new items', function(done) {

        var item1 = item.create();

        expect(item1).to.exist;
        done();
    });

    it('items should be independent from each other', function(done) {

        var item1 = item.create();
        var item2 = item.create();

        expect(item1).to.not.equal(item2);
        done();
    });

    it('should be able to store data about itself', function(done) {

        var item1 = item.create({
            name: 'Test item1',
            price: 10,
            description: 'Test item1 description'
        });

        expect(item1).to.have.deep.property('data.name', 'Test item1');
        expect(item1).to.have.deep.property('data.price', 10);
        expect(item1).to.have.deep.property('data.description', 'Test item1 description');

        done();
    });

    describe('#getPrice()', function() {

        it('should be exposed as a public method', function(done) {

            var item1 = item.create();

            expect(item1).to.have.property('getPrice')
                .that.is.a('function');

            done();
        });

        it('should return the item\'s price', function(done) {

            var item1 = item.create({price: 42});

            expect(item1.getPrice()).to.equal(42);

            done();
        });

        it('should return null when there\'s no defined price', function(done) {

            var item1 = item.create({});

            expect(item1.getPrice()).to.be.null;

            done();
        });

    });

    describe('#match(query)', function() {

        it('should be exposed as a public method', function(done) {

            var item1 = item.create();

            expect(item1).to.have.property('match')
                .that.is.a('function');

            done();
        });

        it('should return true when the item has ALL query\'s properties matching respective values', function(done) {

            var item1 = item.create({
                name: 'Test1',
                price: 42,
                description: 'This should be ignored in the comparison'
            });

            var query = {
                name: 'Test1',
                price: 42
            };

            expect(item1.match(query)).to.be.true;

            done();
        });

        it('should return false when item don\'t match any query\'s properties', function(done) {

            var item1 = item.create({
                name: 'Test1',
                price: 42,
                description: 'This should be ignored in the comparison'
            });

            var query = {
                name: 'Test1',
                price: 84
            };

            expect(item1.match(query)).to.be.false;

            done();
        });

        it('should return false when item doesn\'t have anyone of the properties defined in the query', function(done) {

            var item1 = item.create({
                name: 'Test1',
                price: 42,
                description: 'This should be ignored in the comparison'
            });

            var query = {
                name: 'Test1',
                price: 42,
                random: 'A property not present in the item'
            };

            expect(item1.match(query)).to.be.false;

            done();
        });

    });
});

