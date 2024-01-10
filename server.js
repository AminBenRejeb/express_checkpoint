const express = require ('express')
const app = express()

// middleware 

const Dat = require ('./middleware/Date')
app.use(Dat)

// add css 
app.use(express.static(__dirname+'/public'))

// routes
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})
app.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/public/services.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
// wrong route
// route for wrong path
app.get('*',(req,res)=>{
    res.send('<h2>Ressources Not Found! Please Check</h2>\n')
})








const port = 5002
app.listen(port, err =>{
    err? console.log(err): console.log(`server is running successfully on port ${port}`)

}) 