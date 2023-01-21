import { MongoClient } from "mongodb";

const API_KEY = process.env.REACT_APP_API_KEY;

async function handler(req, res) {
  const {slug} = req.query;

  let client;

  try {
    client = await MongoClient.connect(`${API_KEY}`);
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed" });
    return;
  }

  const db = client.db();
  
  let msgResult;

  try {
    msgResult = await db.collection("messages").findOne({ hash: slug});
  } catch (error) {
    client.close();
    res.status(500).json({ message: "Finding failed" });
    return;
  }

  client.close();
  res.status(200).json(msgResult) 
}

export default handler;