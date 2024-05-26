import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="shadow-md bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <h1 className="flex flex-wrap text-sm font-bold sm:text-xl">
          <span className="text-slate-500">Rent</span>
          <span className="text-slate-700">Ify</span>
        </h1>
        <form className="flex items-center p-3 rounded-md bg-slate-100">
          <input
            type="text"
            placeholder="Search...."
            className="w-24 bg-transparent focus:outline-none sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-500" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
          {currentUser ? (
            <img
            src={currentUser.avatar}
            alt="profile"
            className="object-cover rounded-full h-7 w-7"
          />
          ) : (<li className="hidden sm:inline text-slate-700 hover:underline">
          SignIn
        </li>)}
            
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
