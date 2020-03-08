// This is the master route file , we will bring all the different routes here 

const noteRoutes = require ('./notes_routes');

module.exports = function(app, db) {
  notesRoutes(app,db);
}