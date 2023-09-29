import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'

const apiKey = '2KeBSPaOtlvHMLiPup7X7oRfG0LO8ejkGc2WvpGd'
const app = express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index.ejs')
}) 

app.get('/picture',async (req,res)=>{
    try{
        let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        res.render('index.ejs',{data:response.data})
    } 
    catch(error){
        res.status(404)
    } 
}) 


app.listen(3000)