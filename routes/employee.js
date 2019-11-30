
var express=require('express');
var routerEmployee=express();
var db=require("../db")

var connection=db.connect();
routerEmployee.get("/",(request,response)=>{
  
    var query=`select id ,name,address,email from employee`;
    connection.query(query,(error,result)=>{
      
        if(error)
        {
            console.log(error)
        }
        else
        {
            response.send(result);
        }
    })

})

routerEmployee.post("/",(request,response)=>{
   var id=request.body.id;
   var name=request.body.name;
   var address=request.body.address;
   var email=request.body.email;
   
    var query=`insert into employee(id ,name,address,email) values(${id} ,'${name}','${address}','${email}')`;
    connection.query(query,(error,result)=>{
      
        if(error)
        {
            console.log(error)
        }
        else
        {
            response.send(result);
        }
    })

})

routerEmployee.put("/:id",(request,response)=>{
   const {name,email,address}=request.body;
    
     var query=`update employee set name='${name}',address='${address}',email='${email}'where id='${id}' `;
     connection.query(query,(error,result)=>{
       
         if(error)
         {
             console.log(error)
         }
         else
         {
             response.send(result);
         }
     })
 
 })




routerEmployee.delete("/:id",(request,response)=>{
    var id=request.params.id;
   
    
     var query=`delete from employee where id='${id}' `;

     connection.query(query,(error,result)=>{
       
         if(error)
         {
             console.log(error)
         }
         else
         {
             response.send(result);
         }
     })
 
 })

module.exports=routerEmployee