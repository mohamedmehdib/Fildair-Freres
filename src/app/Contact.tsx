import React from 'react';

export default function Contact() {
  return (
    <div id='contact' className='pt-20 bg-gray-50'>
      {/* Title Section */}
      <div className='flex items-center justify-center py-5 space-x-4'>
        <hr className='bg-[#305eb8] h-1 w-14' />
        <span className='text-[#305eb8] text-4xl font-semibold'>Contactez-nous</span>
        <hr className='bg-[#305eb8] h-1 w-14' />
      </div>

      {/* Contact Form */}
      <div className='max-w-4xl mx-auto px-4 py-10'>
        <form className='bg-white shadow-lg rounded-lg p-8 space-y-6'>
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