

"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: form.username,
      password: form.password,
    });

    if (res?.error) {
      alert("Invalid username or password");
    } else {
      router.push("/"); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Login Form
        </h1>

        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
