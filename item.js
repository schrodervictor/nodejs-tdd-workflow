module.exports.create = function(data) {

    var item = {};

    for (var prop in data) item[prop] = data[prop];

    return item;
}
