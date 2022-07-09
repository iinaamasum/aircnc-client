import { useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ text, btnBg }) => {
  const navLinks = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Host Your Home', link: '/hostHome' },
    { id: 3, name: 'Share Your Experience', link: '/experience' },
  ];
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleScrollY = () => {
    window.scrollY > 20 ? setScrollY(true) : setScrollY(false);
  };

  window.addEventListener('scroll', handleScrollY);

  return (
    <div
      className={`${
        scrollY ? 'bg-[#f1f1f1]' : 'bg-transparent'
      } container mx-auto sticky top-0 z-50`}
    >
      <nav className="max-w-[1300px] px-3 md:px-6 mx-auto py-2">
        <div className="flex items-center justify-between">
          <div className="">
            <Link className="text-4xl font-semibold" to="/">
              <span className="text-green-500">AirCnc</span>
            </Link>
          </div>
          <div className="hidden lg:flex">
            {navLinks.map(({ id, name, link }) => (
              <NavLink
                className={`text-md font-semibold mx-4 hover:text-gray-500 transition-all duration-100 ease-linear ${
                  scrollY ? 'text-black' : text
                }`}
                key={id}
                to={link}
              >
                {name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex">
            <button
              onClick={() => navigate('/login')}
              className={`btn btn-outline md:mr-3 ${btnBg}`}
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-[#251D58] btn hover:bg-[#0d082e] tracking-wide"
            >
              Register
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="visible lg:hidden bg-transparent"
          >
            {isOpen ? <GrClose size={25} /> : <GrMenu size={25} />}
          </button>
        </div>
      </nav>
      <div
        className={`navbar__animation__open absolute bg-[#fafafa] w-full pb-5 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {navLinks.map(({ id, name, link }) => (
          <NavLink
            className="block w-full text-center font-semibold text-lg"
            to={link}
            key={id}
          >
            {name}
          </NavLink>
        ))}
        <div className="grid grid-cols-2 gap-4 container px-3 my-1">
          <button
            onClick={() => navigate('/login')}
            className={`btn btn-outline md:mr-3 ${btnBg}`}
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-[#251D58] btn hover:bg-[#0d082e] tracking-wide"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
