import Image from "next/image";
import Link from "next/link";
import profilepic from "../public/images/profilepic.jpg";

const About = () => {
  return (
    <section className='bg-white font-Poppins block'>
      <div className='block px-0 py-14'>
        <h1 className='relative text-center text-5xl font-medium mb-16'>
          About me
        </h1>

        <div className='flex flex-wrap items-center justify-between md:grid md:grid-cols-3 lg:px-5 '>
          <div className=' overflow-hidden mb-10 md:col-span-1 '>
            <Image
              src={profilepic}
              alt='Picture of the author'
              width={400}
              height={400}
              className='bg-cover rounded-xl shadow-2xl sm:ml-5'
            />
          </div>
          <div className='md:col-span-2 md:px-5'>
            <div className='text-xl font-semibold font-Poppins p-2'>
              General overview as
              <br /> <span className='text-secondary text-bold'>Developer</span>
            </div>
            <p className='py-2 mb-10 text-lg text-justify leading-relaxed font-light'>
              I am Software Engineer and a Web/Apps developer able to build a
              Web presence from the ground up - from concept, navigation, layout
              and programming to UX and SEO. Skilled at writing well-designed,
              testable and efficient code using current best practices in Web
              development. Fast learner, hard worker and team player who is
              proficient in an array of scripting languages and multimedia Web
              tools.
            </p>
            <Link href='/resume.pdf'>
              <a className='bg-secondary font-semibold text-white border-4 border-crimson px-3 py-4 rounded-md hover:text-secondary hover:bg-gray-200 transition duration-700 ease-out transform scale-125 '>
                Download Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
