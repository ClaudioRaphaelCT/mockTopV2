const { json } = require("express");
const express = require("express");
const app = express();
const router = require("./routers/router");

app.use(json());

//ROTAS

app.use("/", router)

app.listen("3000", () =>{
    console.log("Online em http://localhost:3000");
})
