module.exports.create = function(data) {

    var item = {
        data: {},
        getPrice: function() {
            if('price' in this.data)
                return this.data.price;
            else
                return null;
        }
    };

    for (var prop in data) item.data[prop] = data[prop];

    return item;
}
