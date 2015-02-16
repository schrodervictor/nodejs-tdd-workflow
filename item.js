module.exports.create = function(data) {

    var item = {
        data: {},
        getPrice: function() {
            return this.data.price;
        }
    };

    for (var prop in data) item.data[prop] = data[prop];

    return item;
}
