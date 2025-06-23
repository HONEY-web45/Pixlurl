// pages/about.tsx
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">About Pixlurl</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Welcome to <span className="font-semibold">Pixlurl</span>, the best URL shortener in the market! Unlike most services that track you or require signups, we prioritize simplicity and privacy.
      </p>
      <div className="mt-6 space-y-4 max-w-md text-center">
        <p className="text-gray-600">✅ No tracking, no sign-ups. Your privacy matters!</p>
        <p className="text-gray-600">🚀 Fast, efficient, and developer-friendly.</p>
        <p className="text-gray-600">🔗 Open-source and optimized for reliability.</p>
      </div>
      
      
      <div className="mt-6 max-w-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">How Pixlurl Works</h2>
        <p className="text-gray-600 mt-2">
          Shortening your URLs with Pixlurl is incredibly simple. Just paste your long link, click shorten, and get a compact, shareable URL instantly.
        </p>
      </div>

      <div className="mt-6 max-w-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Perfect for Everyone</h2>
        <p className="text-gray-600 mt-2">
          Whether you're a marketer tracking campaigns, a developer sharing resources, or just someone who wants clean and manageable links, Pixlurl is built for you.
        </p>
      </div>

      <div className="mt-6 max-w-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">Why Shorten Links?</h2>
        <p className="text-gray-600 mt-2">
          Shortened links make sharing easy and professional. They help declutter messages, make URLs more memorable, and improve engagement on social media and marketing materials.
        </p>
      </div>

     
      <a href="/shorten" className="mt-6 px-6 py-3 bg-gradient-to-br from-purple-600 via-blue-500 to-purple-400 text-white rounded-lg text-lg font-medium hover:bg-gradient-to-bl transition ">
         Start Shortening
      </a>
    </div>
  );
};

export default About;


export const metadata = {
  title: "About--Pixlurl",
  
  description: "This is about Pixlurl",
};