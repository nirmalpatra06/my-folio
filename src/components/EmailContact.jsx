/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailContact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    ///
    const YOUR_SERVICE_ID = "service_ejbg4ni";
    const YOUR_TEMPLATE_ID = "template_qtcsf9g";
    const YOUR_PUBLIC_KEY = "yc3SoQVtZ2jZ6a-ym";
    ////
    const templeteParems = {
      from_name: userName,
      from_email: userEmail,
      to_name: "Nirmal Patra",
      message: message,
    };
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templeteParems, YOUR_PUBLIC_KEY)
      .then((res) => {
        console.log("Success", res);
        setUserName("");
        setUserEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending Email");
      });
  };
  return (
    <div
      name="contact"
      className=" w-full h-screen p-4 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg flex flex-col p-4 justify-center mx-auto w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline">Contact</h2>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-[80%]">
            <form onSubmit={sendEmail} className=" flex flex-col items-center ">
              <input
                type="text"
                name="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your Name"
                className="bg-transparent p-2 border-2 w-[350px] rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your Email"
                className="bg-transparent my-4 p-2 border-2 w-[350px] rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="10"
                className="bg-transparent border-2 p-2 w-[350px] rounded-md text-white focus:outline-none"
              ></textarea>
              <button className="bg-gradient-to-b from-cyan-500 to-blue-500 text-white py-3 px-6 my-8 rounded-md flex items-center hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailContact;
