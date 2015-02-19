module.exports.createCart = function() {

    return {

        contents: [],

        add: function(item, callback) { // callback = function(err){}

            if(typeof item.getPrice === 'function') {
                this.contents.push(item);
                return callback();
            }

            return callback(new Error('Item to add to cart must expose a getPrice method'))
        },

        remove: function(query, callback) { // callback = function(err) {}
            this.contents = this.contents.filter(function(item, index, contents) {
                return item.match(query) ? false : true;
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
                    return sum + elem.getPrice();
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
