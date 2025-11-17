import mongoose from "mongoose";

const uri = "mongodb+srv://Eber_Mk:eber1235@ebermk.3nvangk.mongodb.net/school_control?retryWrites=true&w=majority&appName=EberMK";
// URL de connection local
//const uri = "mongodb://localhost:27017/school_control";


mongoose.connect(uri)
.then(()=> console.log("MongoDB is connected"))
.catch((err)=> console.log(err));

export default mongoose;