var expect = require('chai').expect;
var item = require('./item');

describe('item.js', function() {
    it('should create new items', function(done) {

        var item1 = item.create();

        expect(item1).to.exist;
        done();
    });
});

