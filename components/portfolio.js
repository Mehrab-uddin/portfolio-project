import Image from "next/image";
const Portfolio = () => {
  const portfolio_data = [
    {
      id: 1,
      title: "TODO App",
      image: "/images/todo.png",
      discription: "MERN stack project, TODO App ...",
    },
    {
      id: 2,
      title: "Meetups App",
      image: "/images/meetups.png",
      discription: "ReactJS app for Meetups, ReactJS and Tailwind CSS ...",
    },
    {
      id: 3,
      title: "Hulu App clone",
      image: "/images/hulu.jpg",
      discription: "Hulu App clone, ReactJs and Tailwind CSS ...",
    },
    {
      id: 4,
      title: "Huddle Web",
      image: "/images/huddle-landing-page.png",
      discription:
        "Huddle website front end design, ReactJS and Tailwind CSS ...",
    },
    {
      id: 5,
      title: "Humanizing Your Insurance.",
      image: "/images/insure-landing-page.png",
      discription: "ReactJS and Tailwind CSS ...",
    },
    {
      id: 5,
      title: "Google Clone",
      image: "/images/google.png",
      discription: "ReactJS and Tailwind CSS ...",
    },
  ];

  return (
    <div className='flex flex-col w-full md:grid grid-cols-2 lg:grid-cols-3'>
      {portfolio_data.map((item) => (
        <div
          className='border-4 cursor-pointer border-gray-200 shadow-md m-2 text-left rounded-lg overflow-hidden bg-gray-200 p-5
         hover:border-secondary hover:bg-gray-100 transition-all hover:scale-105 transform duration-500 hover:ease-out'
        >
          <Image
            layout={"responsive"}
            src={item.image}
            width={300}
            height={200}
          />
          <h2 className='pl-2 pt-5 font-semibold'>{item.title}</h2>
          <p className='px-2'>{item.discription}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
