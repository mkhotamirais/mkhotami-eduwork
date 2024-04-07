import { FaBars, FaGithub, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleDark, toggleOpenNav } from "../app/features/basicSlice";

export const BtnTheme = () => {
  const { isDark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleDark())}
      className="text-base sm:text-xl h-4 sm:h-5 w-auto relative flex flex-col overflow-hidden"
    >
      <div className={`${isDark ? "-translate-y-full" : "translate-y-0"} transition-all duration-100`}>
        <FaMoon />
      </div>
      <div className={`${isDark ? "-translate-y-full" : "translate-y-0"} transition-all duration-100`}>
        <FaSun />
      </div>
    </button>
  );
};

export const BtnSourcecode = () => {
  return (
    <a href="/" className="sm:text-xl">
      <FaGithub />
    </a>
  );
};

export const NavCollapseBtn = () => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleOpenNav())}
      className={`${openNav ? "rotate-180" : ""} transition-all duration-100 text-lg flex items-center`}
    >
      {openNav ? <FaTimes /> : <FaBars />}
    </button>
  );
};
