function Collection() {

    this.items = [];
    this.add = function(item) {
        this.items.push(item);
    };
    this.getAll = function() {
        return this.items;
    };
}

module.exports.create = function() {
    return new Collection();
}

module.exports.constructor = Collection;
