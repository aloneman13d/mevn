const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"*"}))

mongoose.connect(
    "mongodb+srv://promatep2:12345@cluster0.dbol6fd.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    console.log('Connected to Database')
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("Hollo Promatep")
})

app.use("/auth",require("./routes/auth"))


app.listen(5500,()=>{
    console.log("Server Started at port : 5500")
})
