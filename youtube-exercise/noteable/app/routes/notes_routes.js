module.exports = function(app,db){
  app.post('/notes',(req, res)=>{
    // we will create the notes here 
    res.send('Hello')  //this is the callback 

  })
}