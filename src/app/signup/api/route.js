// src/app/signup/api/route.js

import { mongodb } from "@/lib/mongodb";
import Users from "@/app/models/Users";

// Named export for POST requests
export const POST = async (req) => {
    try {
        await mongodb();  // Connect to MongoDB

        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return new Response(
                JSON.stringify({ error: "User already exists" }),
                { status: 400 }
            );
        }

        // Create the new user
        const newUser = new Users({ name, email, password });
        await newUser.save();

        // Send success response
        return new Response(
            JSON.stringify({ message: "User created successfully" }),
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        // Handle any server errors
        return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500 }
        );
    }
};
