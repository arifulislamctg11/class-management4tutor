import { mongodb } from "@/lib/mongodb"; // Adjust path based on your project structure
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await mongodb();
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      message: "Connected to MongoDB!",
      collections: collections.map((col) => col.name), // List collection names
    });
  } catch (error) {
    console.error("Error in MongoDB connection:", error);
    return NextResponse.json(
      { message: "Failed to connect to MongoDB", error: error.message },
      { status: 500 }
    );
  }
}
