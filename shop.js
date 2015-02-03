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
        getSubtotal: function() {
            return this.contents.reduce(
                function(sum, elem) {
                    return sum + elem.price;
                },
                0 // Initial value
            );
        }
    };
};
