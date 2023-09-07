// pages/index.tsx
"use client";
import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation'



export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const {userId} = useAuth();


  const handleTest = () => {
    setResponse(`Your simulated response based on: ${input}`);
  };
  if (userId){
    return redirect('/dashboard');

  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 antialiased">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white relative pt-20 pb-32" >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-7xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            Automated Text Analysis
          </h1>
          <p className="mb-8 text-xl max-w-2xl mx-auto">Streamline your workflow with advanced text processing and moderation.</p>
          <a href="/signup" className="inline-block bg-white hover:bg-gray-200 text-blue-900 rounded-full py-4 px-8 text-xl font-semibold transition transform hover:-translate-y-1 hover:scale-110">
            Get Started
          </a>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
    
      {/* Playground Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex">
          <div className="w-1/2 pr-8">
            <h2 className="text-5xl font-extrabold mb-6">Playground</h2>
            <textarea className="w-full p-4 rounded-lg bg-white shadow-lg transition-all duration-500 hover:shadow-xl resize-none" rows={9} value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="mt-4 p-3 rounded-lg text-white bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-700 hover:to-blue-500 w-full">
              Test
            </button>
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-5xl font-extrabold mb-6">Response</h2>
            <div className="p-4 rounded-lg bg-blue-50 text-gray-900 h-full border-l-4 border-blue-900">
              <code>
                {response || `{
      "response": "Your JSON will appear here."
    }`}
              </code>
            </div>
          </div>
        </div>
      </section>
    
      {/* Features Overview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-10">Features Overview</h2>
          <div className="flex justify-around">
            <div className="transition duration-500 ease-in-out transform hover:rotate-12">Icon: Voice Recognition</div>
            <div className="transition duration-500 ease-in-out transform hover:rotate-12">Icon: Text Moderation</div>
            <div className="transition duration-500 ease-in-out transform hover:rotate-12">Icon: Image Moderation</div>
          </div>
        </div>
      </section>
    
      {/* Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-10">Resources</h2>
          {/* Insert resources here */}
        </div>
      </section>
    
      {/* Contact Us */}
      <footer className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* ... */}
        </div>
      </footer>
    
    </div>
    );
    
    

}
