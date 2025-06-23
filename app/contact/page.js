// pages/contact.tsx
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:items-start min-h-screen bg-purple-100 px-6 sm:px-20 py-10">
    
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-6 sm:mb-8  w-full">Contact Us</h1>

      
      <div className="w-full">
        <p className="text-lg text-gray-700 text-center sm:text-left">
          Got questions? Need support? Want to share feedback? We’re here to help! Reach out to us and let’s connect.
        </p>

        <div className="mt-6 space-y-4">
          <p className="text-gray-600">📧 Email: <a href="mailto:nitik2643@gmail.com" className="text-blue-600 hover:underline">nitik2643@gmail.com</a></p>
          {/* <p className="text-gray-600">📞 Phone: <span className="font-medium">+91-1234567890</span></p> */}
         
        </div>
      </div>

      
      <div className="mt-10 w-full">
        <h2 className="text-xl font-bold text-center text-gray-800">Send Us a Message</h2>
        <p className="text-lg text-gray-700 mt-2 text-center sm:text-left">
          Have something specific in mind? Drop us a message, and we’ll get back to you as soon as possible.
        </p>

        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-md h-32"></textarea>
          <div className="flex justify-center"><button type="submit" className="px-6 py-3 bg-gradient-to-tr from-blue-600 via-pink-500  to-purple-400 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            Send Message
          </button></div>
        </form>
      </div>

      
    </div>
  );
};

export default Contact;

export const metadata = {
  title: "Contact--Pixlurl",
  
  description: "This is Home of Pixlurl",
};