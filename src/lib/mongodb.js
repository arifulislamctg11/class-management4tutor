import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const mongodb = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      
    });
    db = client.db("tutor-management");
    return db;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw new Error("Failed to connect to the database.");
  }
};
