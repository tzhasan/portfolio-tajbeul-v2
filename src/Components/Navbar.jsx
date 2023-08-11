import '../app/globals.css'
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  my-12">
      <div className="border border-gray-500 hover:border-white transition-all delay-100">
        <Bars3BottomLeftIcon className="h-12 w-12 text-white p-1" />
      </div>
      <div className="text-6xl font-bold">MTI</div>
      <div className="flex gap-6 text-xl">
        <button>Contact</button>
        <button>Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
