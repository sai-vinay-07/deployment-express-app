const express = require('express')
const app = express()



app.get('/',(req,res)=>{
    return res.status(200).json({
        msg : "Server Is Running Properly."
    })
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running in the port ${PORT} `)
})