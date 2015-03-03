function Collection() {

    this.add = function() {};
    this.getAll = function() {};

}

module.exports.create = function() {
    return new Collection();
}

module.exports.constructor = Collection;
