const express = require("express");
const app= express();

app.get('/', (req, res)=>{
    console.log(req);
    res.send('serwer dziala');
});

app.listen(8888, () =>{
    console.log("Aplikacja działa na porcie 8888");
});

