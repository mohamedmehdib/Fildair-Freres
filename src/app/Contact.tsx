import Image from 'next/image';
import React, { useState } from 'react';

export default function Contact() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    console.log('Form Data Submitted:', formData); // Log the form data (you can replace this with an API call)
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form fields
  };

  return (
    <div id='contact' className='pt-20'>
      {/* Title Section */}
      <div className='flex items-center justify-center py-5 space-x-4 px-3'>
        <hr className='bg-[#305eb8] h-1 w-14' />
        <span className='text-[#305eb8] text-2xl sm:text-4xl font-semibold'>
          Contactez-nous
        </span>
        <hr className='bg-[#305eb8] h-1 w-14' />
      </div>

      {/* Contact Form */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8'>
        {/* Left Section: Image */}
        <div className='w-full lg:w-1/2 h-64 lg:h-auto relative'>
          <Image
            src="/contact.jpg"
            alt='Contact'
            fill
            className='object-cover rounded-lg'
            priority
          />
        </div>

        {/* Right Section: Form */}
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-lg rounded-lg p-6 sm:p-8 space-y-4 w-full lg:w-1/2'
        >
          {/* Name Field */}
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Nom complet
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Entrez votre nom'
              value={formData.name}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#305eb8] focus:border-[#305eb8]'
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Adresse e-mail
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Entrez votre e-mail'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#305eb8] focus:border-[#305eb8]'
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor='subject' className='block text-sm font-medium text-gray-700'>
              Objet
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              placeholder="Entrez l&apos;objet de votre message"
              value={formData.subject}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#305eb8] focus:border-[#305eb8]'
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              placeholder='Écrivez votre message ici...'
              value={formData.message}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#305eb8] focus:border-[#305eb8]'
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#305eb8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#305eb8]'
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}