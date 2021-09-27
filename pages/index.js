import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import Button from "../components/Button";
import { SiKubernetes, SiDocker, SiLinux } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import Portfolio from "../components/portfolio";

const data = [
  {
    title: "web development",
    // image: "/branding.jpeg",
    discription: "some discription",
  },
  {
    title: "kubernetes Administration",
    discription: "some discription k8s",
  },
  {
    title: "Linux Administration",
    discription: "some discription linux",
  },
];
export default function Index() {
  // console.log(data, "data");
  return (
    <section>
      {/* BANNER Section */}
      <div
        className='bg-hero w-full h-screen bg-no-repeat flex items-center justify-center
      bg-fixed bg-cover font-Poppins text-gray-100'
      >
        <section className='space-y-5'>
          <div className=' text-2xl md:text-3xl lg:text-3xl font-semibold'>
            <span>
              Hi, My name is <br />
            </span>
          </div>
          <div>
            <h1 className=' text-4xl md:text-5xl lg:text-7xl font-bold'>
              Mehrab Uddin,
            </h1>
          </div>
          <div className='text-2xl font-light pb-5 '>
            <p>
              & I'm a{" "}
              <span className='text-3xl text-secondary font-semibold'>
                Web Developer
              </span>
            </p>
          </div>
          <Button title='Hire me' />
        </section>
      </div>
      {/* ABOUT ME Section */}
      <section id='about' className='p-5 block'>
        <About />
      </section>
      {/* SERVICES Section */}
      <section
        id='services'
        className='bg-customBlack block text-gray-200 font-Poppins text-center pt-14 pb-32 px-4'
      >
        <h1 className='text-5xl py-16'>Services</h1>
        <div className=' flex flex-col flex-wrap items-center justify-center md:grid md:grid-cols-2 gap-x-4 lg:grid-cols-3'>
          <Services
            title='web Development'
            Icon={FaPaintBrush}
            description='Professional website developement in latest technologies, ReactJS, NextJS, Tailwind CSS, NodeJS ...'
          />

          <Services
            title='K8S Administration'
            Icon={SiKubernetes}
            description='Certified Kubernetes Administrator  (CKA), Six months of experience as Kubernetes Administrator ...'
          />

          <Services
            title='Linux/Docker'
            Icon={SiDocker}
            description='Experience in Linux and Docker containerization, package applications in containers ...'
          />
        </div>
      </section>

      {/* PORTFOLIO Section */}
      <section
        id='portfolio'
        className=' bg-white block text-gray-900 font-Poppins text-center pt-14 pb-32 px-4'
      >
        <h1 className='text-5xl font-semibold py-10'>Portfolio</h1>
        <Portfolio />
      </section>
      {/* CONTECT Section */}
      <section id='contact' className='bg-customBlack'>
        <Contact />
      </section>
    </section>
  );
}
