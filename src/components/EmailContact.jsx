/* eslint-disable no-unused-vars */
import React from "react";

function EmailContact() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800">
      <div>
        <div>
          <h2>Contact</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-md flex items-center hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailContact;
