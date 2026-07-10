import app from "./app.js";

connectToDb();
app.listen(4000,()=>{
    console.log("PORT Started on port 4000");
});