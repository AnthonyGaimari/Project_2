var orm = require('../config/orm')

var dog = {
    allGoodDogs: function(callback){
        let query = {
            table: 'dogs'
        };
        orm.select(query, callback);
    },

    
};

module.exports = dog;
