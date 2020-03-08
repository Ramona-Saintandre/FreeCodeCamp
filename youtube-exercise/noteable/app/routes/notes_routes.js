module.exports = function(app, db){
  app.post('/notes',(req,res)=>{
    // create teh note here 
    res.send('hello')
  })
}