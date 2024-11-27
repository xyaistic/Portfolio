import React, { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { Client, Databases } from "appwrite";

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('67471ee600054eaaa809'); // Replace with your Appwrite project ID

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await databases.createDocument(
        '67471f080038d49e5cd8', // Replace with your Appwrite database ID
        '6747210f0033b9d04e4f', // Replace with your Appwrite collection ID
        'unique()', // Unique document ID
        formData
      );
      console.log('Form submission successful:', response);
      alert("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="min-h-[85vh] flex  justify-center flex-col md:flex-row  items-center p-6 md:p-8">
      <div className="max-w-screen-xl  w-full flex flex-col md:flex-row items-center md:items-start">
        {/* Text Section */}
        <div className="w-full md:w-3/4  text-center md:text-left mb-6 md:mb-0 md:pr-8 flex flex-col md:gap-10">
          <h5 className="text-xl sm:text-2xl mb-3 font-semibold">
            <span className="text-orange-500">👋 Let’s Connect,</span>
          </h5>
          <h2 className="text-5xl lg:text-8xl xl:text-9xl font-semibold leading-tight">
            Build Something <span className="text-orange-500">Together.</span>
          </h2>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2   bg-white p-6 md:p-8 rounded-md shadow-xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Your name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: John"
                className="w-full border border-gray-300 rounded-md p-4"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: ex@gmail.com"
                className="w-full border border-gray-300 rounded-md p-4"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">What you are interested in</label>
            <select
              required
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-4"
            >
              <option value="">Select interest</option>
              <option value="App Development">App Development</option>
              <option value="Web Development">Web Development</option>
              <option value="WordPress">WordPress</option>
              <option value="Enquiry">Enquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Let us know your project about"
              className="w-full border border-gray-300 rounded-md p-4 h-40 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black flex font-semibold justify-center items-center gap-5 text-white px-10 py-4 rounded-md hover:bg-gray-800 transition-colors w-full"
          >
            Just Send
            <FaLocationArrow />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
