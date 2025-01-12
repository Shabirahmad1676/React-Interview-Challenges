// src/App.js
import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-yellow-300 h-screen">
      
      <div className="flex items-center justify-center w-96 rounded-md p-3 bg-white">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="email"
                id="username"
                placeholder="Shabir"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="username"
                placeholder="abc@me.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
           
          
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-200"
            >
              Login
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
