var expect = require('chai').expect;
var item = require('./item');

describe('item.js', function() {
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
});

