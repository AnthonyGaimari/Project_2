var orm = require('../config/orm')

var dog = {
    allGoodDogs: function (callback) {
        let query = {
            table: 'dogs'
        };
        orm.select(query, callback);
    },

    insertDog: function (newDog, callback) {
        let query = {
            table: 'dogs',
            data: newDog,
            // debug: true
        };
        orm.insert(query, callback);
    },

    dogById: function (id, callback){
        let query = {
            table: 'dogs',
            where: [{dog_id: id}]
        };
        orm.select(query, callback);
    }
};

module.exports = dog;
