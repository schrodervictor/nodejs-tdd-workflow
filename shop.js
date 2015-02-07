module.exports.createCart = function() {

    return {
        contents: [],
        add: function(item, callback) { // callback = function(err){}

            if(!('price' in item))
                return callback(new Error('Item to add to cart must have a price'));

            this.contents.push(item);
            return callback();
        },
        getAll: function() {
            return this.contents;
        },
        count: function(callback) {
            var quantity = this.contents.length;
            return callback(null, quantity);
        },
        getSubtotal: function() {
            return this.contents.reduce(
                function(sum, elem) {
                    return sum + elem.price;
                },
                0 // Initial value
            );
        },
        empty: function(callback) {
            this.contents = [];
            callback();
        }
    };
};
