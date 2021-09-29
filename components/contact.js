/*eslint-disable react/no-unknown-property*/
/* eslint-disable react/no-unescaped-entities*/
import Button from "./Button";
export default function Contact() {
  return (
    <div className='border-t-2 pt-24 pb-32 font-Poppins text-gray-200'>
      <h1 className='text-center text-5xl py-5 pb-20 font-semibold'>
        Contact me
      </h1>
      <div className='flex flex-col  px-4 md:flex-row'>
        <div className='px-6 pb-10 block'>
          <h1 className='text-2xl font-semibold p-5'>Contact info</h1>
          <div className='flex space-x-4'>
            <p className='mt-2 text-red-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </p>
            <h3>
              <span className='font-semibold'>
                {" "}
                Name <br />{" "}
              </span>
              Mehrab Uddin
            </h3>
          </div>
          <div className='flex space-x-4'>
            <p className='mt-2 text-red-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </p>
            <h3>
              <span className='font-semibold'>
                {" "}
                Address <br />{" "}
              </span>
              Islamabad, Rawalpindi
            </h3>
          </div>
          <div className='flex space-x-4'>
            <div className='mt-2 text-red-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3>
              <span className='font-semibold'>
                Email <br />
              </span>
              mehrab.uddin905@gmail.com
            </h3>
          </div>
        </div>
        <form className='px-4 my-5S max-w-3xl mx-auto space-y-6'>
          <div>
            <h1 className='text-3xl font-semibold'>Get in touch</h1>
            <p className='text-sm font-light'>
              Drop me a message, I'llName get to you soon
            </p>
          </div>
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            <div className='w-full'>
              <label>Name</label>
              <input
                className='block border border-gray-400 py-2 px-4 w-full focus:outline-none rounded focus:border-secondary text-black'
                type='text'
                id='firstname'
                placeholder='Full name'
              />
            </div>
            <div className='w-full'>
              <label>Email</label>
              <input
                className='block border border-gray-400 py-2 px-4 w-full focus:outline-none rounded focus:border-secondary text-black'
                type='email'
                id='email'
                placeholder='Email'
              />
            </div>
          </div>
          <div>
            <label>Subject</label>
            <input
              className='block border border-gray-400 py-2 px-4 w-full focus:outline-none rounded focus:border-secondary text-black'
              type='text'
              id='lastname'
              placeholder='Subject'
            />
          </div>
          <div className='pb-5'>
            <label>Message</label>
            <textarea
              className='block border border-gray-400 py-2 px-4 w-full focus:outline-none rounded focus:border-secondary text-black'
              name='message'
              id='message'
              cols='5'
              rows=''
              placeholder='Text me here ...'
            ></textarea>
          </div>
          <Button title='Submit' />
        </form>
      </div>
    </div>
  );
}
