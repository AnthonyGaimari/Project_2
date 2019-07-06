var orm = require('../config/orm')

var favorites = {

    insertFavorite: function (new_favorite, callback) {
        let query = {
            table: 'favorites',
            data: new_favorite,
            debug: true
        };
        orm.insert(query, callback);
    },

    getUserFavorites: function (user_id, callback){
        console.log("Favorites Model: "+ user_id)
        orm.getUserFavorites(user_id, callback);
    }
 
};

module.exports = favorites;