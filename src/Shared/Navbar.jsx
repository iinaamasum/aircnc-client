import { GrClose, GrMenu } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Host Your Home', link: '/name' },
    { id: 3, name: 'Host Your Experience', link: '/experience' },
  ];
  return (
    <div className="container md:px-6 px-3 mx-auto">
      <nav className="max-w-[1300px] mx-auto py-2">
        <div className="flex items-center justify-between">
          <div className="">
            <Link className="text-4xl font-semibold" to="/">
              AirCnc
            </Link>
          </div>
          <div className="hidden lg:flex">
            {navLinks.map(({ id, name, link }) => (
              <NavLink
                className="text-md font-semibold mx-4 hover:text-gray-500"
                key={id}
                to={link}
              >
                {name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex">
            <button className="btn btn-outline btn-[#251D58] md:mr-3">
              Login
            </button>
            <button className="bg-[#251D58] btn hover:bg-[#0d082e] tracking-wide">
              Register
            </button>
          </div>
          <div className="visible lg:hidden">
            <GrMenu />
            <GrClose />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
