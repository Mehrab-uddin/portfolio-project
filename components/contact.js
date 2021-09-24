export default function Contact() {
  return (
    <div className=' flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Contact me
          </h2>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <textarea
                id='message'
                name='message'
                type='text'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='type message and send'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// function Contact() {
//   return (
//     <section>
//       <div className='w-full bg-gray-700 text-center text-gray-200 tracking-wide p-4'>
//         <h1 className='py-8 font-semibold font-Poppins text-3xl'>Contact me</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam
//           fuga atque dolore explicabo animi, quis tempore pariatur unde
//           voluptates placeat enim officia cupiditate iure impedit tempora natus
//           quidem facilis?
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Contact;
