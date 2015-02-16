module.exports.create = function(data) {

    var item = {
        data: {},
        getPrice: function() {
            if('price' in this.data)
                return this.data.price;
            else
                return null;
        },
        match: function(query) {}
    };

    for (var prop in data) item.data[prop] = data[prop];

    return item;
}
