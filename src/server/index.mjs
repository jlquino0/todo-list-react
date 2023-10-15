import express from "express";
import cors from "cors";
import db from "./db/conn.mjs"
//import "./loadEnvironment.mjs";
//import "express-async-errors";
//import posts from "./routes/posts.mjs";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello get request');
});

app.post('/register', async (req,res)=>{
    console.log('api registrarse handled');
    const username = req.body.username;
    console.log('register post user ',username);

    let collection = await db.collection("todo-list");
    let results = await collection.find({})
      .limit(50)
      .toArray();
    
    console.log('send results ',results);
    res.send(results).status(200);
    
})

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Error general.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


