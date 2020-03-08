//exporting the first route here 
//this will be our master route file 

const noteRoutes = require('./note_routes');
module.exports = function(app, db) { 
   noteRoutes(app, db);
}