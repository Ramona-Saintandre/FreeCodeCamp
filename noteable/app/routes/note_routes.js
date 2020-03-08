//first part of CRUD is create , here we are creating the first route 

module.exports = function(app, db) {
  app.post('/notes', (req, res) =>{  //not sure where this /notes is coming from 
    //notes will be created here 
    res.send('hello')
  });
};