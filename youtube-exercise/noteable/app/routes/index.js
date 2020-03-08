// This is the master route file , we will bring all the different routes here 

const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
	noteRoutes(app,db);

}