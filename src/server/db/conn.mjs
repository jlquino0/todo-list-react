import { MongoClient } from "mongodb";
const connectionString = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.log(e);
}
let db = conn.db("todo-list");
export default db;