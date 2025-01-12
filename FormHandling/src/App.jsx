import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'

function App() {

  const [FName, setFName] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [conPass, setconPass] = useState('')
  const [error, seterror] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(pass.length<8){
      seterror('Password must be 8 character!')
      return;
    }

    if(pass!=conPass){
      seterror('Password must match!')
      return
    }

    if(!/[!@#$%^&*().,?';":}{]/.test(pass)){
      seterror('Missing Special Character')
      return  
    }
    
    if(!/[A_Z]/.test(pass)){
      seterror("At Least One UpperCase Letter")
      return
    }


    setFName("")
    setemail("")
    setpass("")
    setconPass('')
    seterror('')

    toast.success('🦄LogIn Successfull!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
      })
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-yellow-300 h-screen">
      
      <div className="flex items-center justify-center w-96 rounded-md p-3 bg-white">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center bg-gradient-to-r from-yellow-500 to-purple-300 bg-clip-text text-transparent">Create an Account!</h2>
          <form onSubmit={(e)=>{
            handleSubmit(e)
          }}>
            {/* first name */}
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
              required
                type="text"
                id="username"
                placeholder="Shabir"
                value={FName}
                onChange={(e)=>{
                  setFName(e.target.value)
                }}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* email */}
            <div className="mb-6 flex flex-col">

              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
              required
                type="email"
                id="username"
                value={email}
                onChange={(e)=>{
                  setemail(e.target.value)
                }}
                placeholder="abc@me.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* password */}
            <div className="mb-6">

              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
              required
                type="password"
                id="password"
                value={pass}
                onChange={(e)=>{
                  setpass(e.target.value)
                }}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
           
            {/* password */}
            <div className="mb-3">

              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
              required
                type="password"
                id="password"
                value={conPass}
                onChange={(e)=>{
                  setconPass(e.target.value)
                }}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
                {error && (
                  <p className="text-red-600 font-semibold text-center mb-2">{error}</p>
                ) }
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
