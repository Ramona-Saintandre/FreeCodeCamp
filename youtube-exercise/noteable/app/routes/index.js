// This is the master route file 

const noteRoutes = require ('./notes_routes');

module.exports = function(app, db) {
  notesRoutes(app,db);
}