module.exports.createCart = function() {

    return {

        contents: [],

        add: function(item, callback) { // callback = function(err){}

            this.contents.push(item);
            return callback();
        },

        remove: function(query, callback) { // callback = function(err) {}
            this.contents = this.contents.filter(function(item, index, contents) {
                var match = true;
                for(var key in query) {
                    // if the item doesn't have the key, it'll be kept
                    match = match && (item[key] === query[key]);
                    if(!match) break;
                }
                return !match;
            });
            return callback();
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
