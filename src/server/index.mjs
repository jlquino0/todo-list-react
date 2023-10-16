import express from "express";
import cors from "cors";
import db from "./db/conn.mjs";
import boddParser from "body-parser";
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(boddParser.json());
app.use(boddParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'mySecretkey', resave: false, saveUninitialized: false }));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use(cookieParser('mySecretkey'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('hello get request');
});

app.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let collection = await db.collection("users");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);

})

app.post('/user', async (req, res) => {
    console.log('api login handled');
    const username = req.body.username;
    const password = req.body.password;
    console.log('register post user ', username);
    console.log('register post pass ', password);

    let collection = await db.collection("users");
    let query = { username: req.body.username, password: req.body.password };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send("Found").status(200);

})

app.post('/todos', async (req, res) => {
    console.log('insert many documents :=')
    console.log(req.body.todos)

    let collection = await db.collection("todos");
    collection.deleteMany({});
    let newDocument = req.body.todos;
    let result = await collection.insertMany(newDocument);
    res.send(result).status(204);

})

app.get('/todos', async (req, res) => {
    console.log('get todos');
    let collection = await db.collection("todos");
    let results = await collection.find({})
        .limit(50)
        .toArray(); -

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


