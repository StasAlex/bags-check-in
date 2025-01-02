"use client";

import { signIn } from "next-auth/react"

export default function SignIn() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl text-primary-dark font-bold mb-6">Welcome to Productify</h1>
            <h2 className="text-3xl font-bold mb-6">Sign In</h2>
            <button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="px-6 py-3 bg-primary-dark text-white rounded-lg hover:bg-red-600"
            >Signin with Google</button>
        </div>
    )
}
