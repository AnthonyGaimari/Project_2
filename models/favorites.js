var orm = require('../config/orm')

var favorites = {

    insertFavorite: function (newFavorite, callback) {
        let query = {
            table: 'favorites',
            data: newFavorite,
            debug: true
        };
        orm.insert(query, callback);
    },

    getUserFavorites: function (currUser_Id, callback){
        orm.getUserFavorites(currUser_Id, callback);
    }
 
};

module.exports = favorites;