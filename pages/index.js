import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";

export default function Index() {
  const data = [
    {
      title: "Web Developmet",
      id: 1,
      image:
        "https://mechomotive.com/wp-content/uploads/2021/08/Artificial-Intelligence-5.jpg",

      discription: "A discription ",
    },
    {
      title: "Mobile App Developmet",
      id: 2,
      image:
        "https://mechomotive.com/wp-content/uploads/2021/08/Artificial-Intelligence-5.jpg",

      discription: "Mobile App discription ",
    },
    {
      title: "Web Developmet UI/UX",
      id: 3,
      image:
        "https://mechomotive.com/wp-content/uploads/2021/08/Artificial-Intelligence-5.jpg",
      discription: "A discription UI/UX ",
    },
  ];
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
          <div className='text-2xl font-light '>
            <p>
              & I'm a{" "}
              <span className='text-3xl text-secondary font-semibold'>
                Web Developer
              </span>
            </p>
          </div>
        </section>
      </div>
      {/* ABOUT ME Section */}
      <section id='about' className='p-5 block'>
        <About />
      </section>
      {/* SERVICES Section */}
      <section
        id='services'
        className='bg-customBlack w-full h-full block mb-1 text-gray-200 font-Poppins text-center'
      >
        <h1 className='text-5xl py-20'>My Services</h1>
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-3 items-center pb-32'>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
        </div>
      </section>

      {/* PORTFOLIO Section */}
      <section
        id='portfolio'
        className='bg-gray-200 w-full h-full block mb-1 text-bases font-Poppins text-center'
      >
        <h1 className='text-5xl py-20'>Portfolio</h1>
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-3 items-center pb-32'>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
          <div className='mx-5 '>
            <Services />
          </div>
        </div>
      </section>
      {/* CONTECT Section */}
      <section id='contact'>
        <Contact />
      </section>
    </section>
  );
}
