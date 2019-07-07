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
    },

    deleteFavorite: function (fav_id, callback){
        let query = {
            table: 'favorites',
            where: [{fav_id: fav_id}],
            debug: true
        };
        console.log("favorites ID: " + fav_id)
        orm.delete(query, callback)
    }
 
};

module.exports = favorites;