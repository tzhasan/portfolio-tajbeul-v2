import { Link } from 'react-scroll';
import '../app/globals.css'
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  my-12">
      <div className="border border-gray-500 hover:border-white transition-all delay-100">
        <Bars3BottomLeftIcon className="h-12 w-12 text-white p-1" />
      </div>
      <div className="md:text-6xl sm:text-4xl text-2xl font-bold">TzHasan</div>
      <div className="flex gap-6 text-xl">
        <Link to="">
          <button>Contact</button>
        </Link>
        <Link
          to="demoProject"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1200}
        >
          <button>Demo</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
