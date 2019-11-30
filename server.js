const express=require('express');
const app= express();
const routerEmployee=require("./routes/employee")
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
  app.use("/emp",routerEmployee)

app.listen(9898,'0.0.0.0',()=>{
    console.log("Server started on port 9898");
})