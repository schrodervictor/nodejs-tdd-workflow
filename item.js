module.exports.create = function(data) {

    var item = {
        data: {}
    };

    for (var prop in data) item.data[prop] = data[prop];

    return item;
}
