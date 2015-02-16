module.exports.create = function(data) {

    var item = {
        data: {},
        getPrice: function() {
            if('price' in this.data)
                return this.data.price;
            else
                return null;
        },
        match: function(query) {

            var match = true;

            for(var key in query) {
                match = match && (this.data[key] === query[key]);
                if(!match) break;
            }

            return match;
        }
    };

    for (var prop in data) item.data[prop] = data[prop];

    return item;
}
