import { ArrowRightIcon } from "@heroicons/react/24/outline";


const Buttoncus = ({ children }) => {
  return (
    <div className="text-white">
      <button className="btncustomized flex items-center group">
        {children}
        <ArrowRightIcon className="h-6 w-6  ml-4 group-hover:text-black group-hover:scale-125 transition duration-400" />
      </button>
    </div>
  );
};

export default Buttoncus;
