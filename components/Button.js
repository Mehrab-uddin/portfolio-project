import Link from "next/dist/client/link";

const Button = () => {
  return (
    <div>
      <Link href='#contact'>
        <a className='text-xl font-semibold bg-secondary text-semibold text-white border-4 border-crimson px-6 py-2 rounded-md hover:text-secondary hover:bg-gray-200 transition duration-700 hover:ease-in-out transform hover:scale-105 '>
          Hire me
        </a>
      </Link>
    </div>
  );
};

export default Button;
