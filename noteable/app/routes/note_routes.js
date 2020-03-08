//first part of CRUD is create , here we are creating the first route 

module.exports = function(app, db) {
  app.post('/notes', (req, res) =>{
    //notes will be created here 
    res.send('hello')
  })
};