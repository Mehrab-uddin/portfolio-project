import About from "../components/about";
import Services from "../components/services";

export default function Index() {
  return (
    <section>
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
      <section className='p-5 block'>
        <About />
      </section>
      {/* SERVICES section */}
      <section className='bg-black block pt-8 '>
        <Services />
      </section>

      {/* PORTFOLIO section */}

      {/* CONTECT section */}
    </section>
  );
}
