import Image from "next/image";
import Link from "next/link";
import profilepic from "../public/images/profilepic.jpg";
import TextLoop from "react-text-loop";

const About = () => {
  return (
    <section className='bg-white font-Poppins block'>
      <div className='block px-0 mt-10 md:mt-16'>
        <h1 className='relative text-center text-5xl font-medium mb-16'>
          About me
        </h1>

        <div className='flex flex-wrap items-center justify-between px-2 md:flex-row '>
          <div className=''>
            <Image
              src={profilepic}
              alt='Picture of the author'
              width={350}
              height={350}
              className='bg-cover rounded'
            />
          </div>
          <div className='mb-10'>
            <div className='text-xl font-semibold font-Poppins p-2'>
              General overview as
              <br />{" "}
              <TextLoop>
                <span className='text-secondary text-bold'>Developer</span>
                <span className='text-secondary text-bold'>Freelancer</span>
              </TextLoop>
            </div>
            <p className='max-w-lg lg:max-w-2xl py-2 mb-8 text-lg text-justify leading-relaxed font-light'>
              I am Software Engineer and a Web/Apps developer able to build a
              Web presence from the ground up - from concept, navigation, layout
              and programming to UX and SEO. Skilled at writing well-designed,
              testable and efficient code using current best practices in Web
              development. Fast learner, hard worker and team player who is
              proficient in an array of scripting languages and multimedia Web
              tools.
            </p>
            <Link href='/resume.pdf'>
              <a target='_blank' className='btn-resume'>
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
