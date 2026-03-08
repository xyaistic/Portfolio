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
    <div className="min-h-screen transition-colors duration-300 flex justify-center flex-col md:flex-row items-center p-6 md:p-8 bg-white dark:bg-[#181818]">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center lg:items-start gap-12 lg:gap-20">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left flex flex-col gap-6 lg:pt-10">
          <div className="flex items-center gap-3">
             <span className="font-semibold px-4 py-2 bg-[#b5f23d]/20 text-[#688f1d] dark:bg-[#b5f23d] dark:text-black rounded-full text-sm md:text-base inline-flex">
                👋 Let's Connect
             </span>
          </div>
          <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            Build Something <br className="hidden lg:block"/>
            <span className="text-[#b5f23d] relative inline-block mt-2 lg:mt-4">
              Together.
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#b5f23d]/30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg mt-4 leading-relaxed">
            Have a project in mind, a question, or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-[#f9fafb] dark:bg-[#242424] border border-gray-200 dark:border-[#3a3a3a] p-8 md:p-10 rounded-3xl shadow-xl space-y-6 hover:shadow-2xl transition-shadow relative overflow-hidden group"
        >
          {/* subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b5f23d]/5 blur-3xl rounded-full pointer-events-none group-hover:bg-[#b5f23d]/10 transition-colors duration-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Your name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: John Doe"
                className="w-full bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#3a3a3a] text-gray-900 dark:text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#b5f23d] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Your email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: hello@example.com"
                className="w-full bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#3a3a3a] text-gray-900 dark:text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#b5f23d] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="relative z-10">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">What you are interested in</label>
            <select
              required
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#3a3a3a] text-gray-900 dark:text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#b5f23d] focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>Select an interest</option>
              <option value="App Development">App Development</option>
              <option value="Web Development">Web Development</option>
              <option value="WordPress">WordPress</option>
              <option value="Enquiry">General Enquiry</option>
            </select>
            <div className="absolute right-4 top-12 pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative z-10">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or inquiry..."
              className="w-full bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#3a3a3a] text-gray-900 dark:text-white rounded-xl p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#b5f23d] focus:border-transparent transition-all leading-relaxed"
            ></textarea>
          </div>

          <button
            type="submit"
            className="relative z-10 w-full bg-[#1a1a1a] dark:bg-[#b5f23d] text-[#b5f23d] dark:text-[#1a1a1a] hover:bg-black dark:hover:bg-[#a1d936] font-bold text-lg py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg group-hover:shadow-xl mt-2"
          >
            Send Message
            <FaLocationArrow className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
