import User from "@/app/models/Users";
import { mongodb } from "@/lib/mongodb";

export const GET = async () => {
    try {
        // Connect to MongoDB
        await mongodb();

        // Fetch all users from the database
        const users = await User.find();

        // Return the list of users
        return new Response(
            JSON.stringify({ users }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching users:", error);

        // Return server error response
        return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500 }
        );
    }
};