const express = require("express");
const app= express();

app.get('/', (req, res)=>{
    console.log(req);
    res.send('serwer dziala');
});

const port = process.env.PORT || 8888;

app.listen(port, () =>{
    console.log(`Aplikacja działa na porcie ${port}`);
});

