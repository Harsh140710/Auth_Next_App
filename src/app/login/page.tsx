"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUSer] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user, {
        withCredentials: true,
      });
      console.log("Success Login", response.data);
      toast.success("Login successfully");
      router.push("/profile")
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="border p-10 rounded-xl">
        <h1 className="text-2xl text-center mb-3 font-bold">{loading ? "Processing" : "LogIn"}</h1>
        <hr />
        <form onSubmit={(e) => {
          e.preventDefault();
        }} className="flex flex-col mt-5">
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

          <button
            onClick={onLogin}
            className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 mt-2 rounded-xl cursor-pointer"
          >
            {buttonDisabled ? "Not Login" : "Login"}
          </button>

          <div className="flex items-center justify-between mt-5">
            <p className="text-sm font-sans">You don't have an account ?</p>
            <Link
              href="/signup"
              className="text-blue-600 underline text-sm font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
