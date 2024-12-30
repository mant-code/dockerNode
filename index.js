
import express from "express"

const app = express()

app.get("/",(req,res)=> res.json("hello ashish !"))


const mongoURI = "mongodb://mongodb:27017"
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
app.listen(4000,()=>{
    console.log("server is starting!")
})