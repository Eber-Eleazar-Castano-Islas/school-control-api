import "./database.js";
import app from "./app.js";

//Star server
app.listen(app.get("port"),()=> 
    console.log("Server Listening on port: "+ app.get("port"))
);
