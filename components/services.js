const Services = ({ title, Icon, description }) => {
  // console.log(data, "this is props in data");
  return (
    <div
      className='bg-cardBlack max-w-sm flex flex-col items-center align-middle border-2 border-cardBlack
     rounded-lg mb-8 pb-5 pt-4  hover:bg-secondary cursor-pointer group transition-all duration-500 transform hover:scale-105 hover:ease-linear'
    >
      <div>
        <Icon className='h-20 w-20 text-secondary group-hover:text-gray-200' />
      </div>
      <div>
        <h2 className='text-2xl uppercase mt-4 font-semibold'>{title}</h2>
        <p className='text-lg px-2 leading-relaxed antialiased font-light'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Services;
