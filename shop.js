module.exports.createCart = function() {

    return {
        contents: [],
        add: function(item) {
            this.contents.push(item);
        },
        getAll: function() {
            return this.contents;
        }
    };
};
