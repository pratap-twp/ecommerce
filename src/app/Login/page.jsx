"use client";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted", form);
    setForm({
      username: "",
      password: "",
    });
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

        
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter username"
            id="username"
            value={form.username}
            onChange={handleChange}
            name="username"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

    
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
