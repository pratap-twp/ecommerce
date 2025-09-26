

"use client";
import React, { useState } from "react";


export default function Page() {

 
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }); 

    const data = await res.json();
    alert(data.message || data.error);

  if (res.ok) {
      setForm({ name: "", username: "", password: "" });
      
    }
      
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1>

        <input
          name="name"
          value={form.name}
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <input
          name="username"
          value={form.username}
          type="text"
          placeholder="Enter your username"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <input
          name="password"
          value={form.password}
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
