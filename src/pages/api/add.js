import { MongoClient } from "mongodb";

const API_KEY = process.env.REACT_APP_API_KEY;

async function handler(req, res) {

  if (req.method === "POST") {

    const { message, hash } = req.body;

    if (!message || message.trim() === "" || !hash || hash.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = { message, hash, clicks: 0 };

    console.log(newMessage)

    let client;

    try {
      client = await MongoClient.connect(`${API_KEY}`);
    } catch (error) {
      res.status(500).json({ message: "Could not connected to the database" });
      return;
    }

    const db = client.db();

    try {
      await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();

    res
    .status(200)
    .json({ message: "Successfully stored message", message: newMessage });
  }

}

export default handler;