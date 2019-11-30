var mysql=require("mysql");

function connect()
{
    var connection=mysql.createConnection({
        host:"localhost",
        user:"dac",
        password:"dac",
        database:"mydb",
        port:3306
    });

    connection.connect();
    return connection;
}


module.exports={connect:connect}
