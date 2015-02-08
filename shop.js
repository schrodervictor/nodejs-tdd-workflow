module.exports.createCart = function() {

    return {
        contents: [],
        add: function(item, callback) { // callback = function(err){}

            if(!('price' in item))
                return callback(new Error('Item to add to cart must have a price'));

            this.contents.push(item);
            return callback();
        },
        remove: function(query, callback) {
            this.contents = this.contents.filter(function(item, index, contents) {
                var match = true;
                for(var key in query) {
                    match = match && (item[key] === query[key]);
                    if(!match) break;
                }
                return !match;
            });
            callback();
        },
        getAll: function(callback) { // callback = function(err, cartContents) {}
            var cartContents = this.contents;
            return callback(null, cartContents);
        },
        count: function(callback) { // callback = function(err, quantity) {}
            var quantity = this.contents.length;
            return callback(null, quantity);
        },
        getSubtotal: function(callback) { // callback = function(err, subtotal)
            var subtotal = this.contents.reduce(
                function(sum, elem) {
                    return sum + elem.price;
                },
                0 // Initial value
            );
            return callback(null, subtotal);
        },
        empty: function(callback) { // callback = function(err) {}
            this.contents = [];
            return callback();
        }
    };
};
