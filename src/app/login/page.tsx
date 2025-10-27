"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUSer] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="border p-10 rounded-xl">
        <h1 className="text-2xl text-center mb-3 font-bold">Login</h1>
        <hr />
        <form action="" className="flex flex-col mt-5">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="px-4 py-2 bg-white text-black border rounded-xl focus:border-black focus:outline-none mb-4"
            value={user.email}
            onChange={(e) => setUSer({ ...user, email: e.target.value })}
            type="email"
            name="email"
            placeholder="Enter the email"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="px-4 py-2 bg-white text-black border rounded-xl focus:border-black focus:outline-none mb-4"
            value={user.password}
            onChange={(e) => setUSer({ ...user, password: e.target.value })}
            type="password"
            name="password"
            placeholder="Enter the password"
          />

          <button onClick={onLogin} className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 mt-2 rounded-xl cursor-pointer">Login</button>
        
        <div className="flex items-center justify-between mt-5">
            <p className="text-sm font-sans">You don't have an account ?</p>
            <Link href="/signup" className="text-blue-600 underline text-sm font-semibold">Sign Up</Link>
        </div>
        </form>
      </div>
    </div>
  );
}
