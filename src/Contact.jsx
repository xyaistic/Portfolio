import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-[85vh] flex justify-center items-center p-8">
      <div className="mx-auto max-w-screen-xl flex w-full justify-between">
        {/* <h2 className="text-8xl font-semibold w-1/2">
        👋 <br/>Love to hear from you, <br />
          Get in touch 
        </h2> */}
        <div className="w-1/2">
  <h5 className="text-2xl mb-3 font-semibold">
    <span className="text-orange-500">👋 Let’s Connect,</span>
  </h5>
  <h2 className="text-9xl font-semibold leading-tight">
    Build Something <span className="text-orange-500">Together.</span>
  </h2>
</div>



<form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 p-8 rounded-md bg-white shadow-xl">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-gray-700 mb-2">Your name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ex : John"
        className="w-full border border-gray-300 rounded-md p-4"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-2">Your email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ex : ex@gmail.com"
        className="w-full border border-gray-300 rounded-md p-4"
      />
    </div>
  </div>

  <div>
    <label className="block text-gray-700 mb-2">What you are interested</label>
    <select
      name="interest"
      value={formData.interest}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-md p-4"
    >
      <option value="">Select interest</option>
      <option value="App Development">App Development</option>
      <option value="Web Development">Web Development</option>
      <option value="Wordpress">Wordpress</option>
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
    className="bg-black text-white px-10 py-4 rounded-md hover:bg-gray-800 transition-colors w-full"
  >
    Just Send →
  </button>
</form>

      </div>
    </div>
  );
};

export default Contact;
