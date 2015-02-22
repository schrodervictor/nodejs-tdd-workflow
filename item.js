function Item(data) {

    this.data = {};

    this.getPrice = function getPrice() {
        if('price' in this.data)
            return this.data.price;
        else
            return null;
    };

    this.match = function match(query) {

        var match = true;

        for(var key in query) {
            // if the item doesn't have the key, it's not a match
            // because (undefined !== 'something')
            match = match && (this.data[key] === query[key]);
            if(!match) break;
        }

        return match;
    }

    for (var prop in data) this.data[prop] = data[prop];
}


module.exports.create = function(data) {

    return new Item(data);
}

module.exports.constructor = Item;
