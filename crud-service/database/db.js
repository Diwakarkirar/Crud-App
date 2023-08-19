import mongoose from "mongoose";

const connection=async(username,password)=>{
try{
await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.rqttz.mongodb.net/UsersDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
console.log("Database connected successfully");
}
catch(error){
    console.log("Error while connecting with the database ",error);
}
}
export default connection;