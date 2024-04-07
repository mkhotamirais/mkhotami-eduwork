import { Logo } from "./Components";
import { NavMenu, NavMenuCollapse } from "./NavMenu";
import { BtnSourcecode, BtnTheme, NavCollapseBtn } from "./NavRight";
import { useSelector } from "react-redux";
const menus = ["home", "projects", "work"];

const Header = () => {
  const { isDark } = useSelector((state) => state.basic);
  return (
    <>
      <header className={`${isDark ? "bg-slate-800" : "bg-white"} z-50 h-16 sticky top-0 px-3 lg:px-16 border-b`}>
        <div className="flex h-full justify-between items-center gap-4 sm:gap-8">
          <div>
            <Logo />
          </div>
          <div className="w-full hidden sm:block">
            <NavMenu menus={menus} />
          </div>
          <div className="flex w-full sm:w-auto gap-3 min-w-max">
            <BtnTheme />
            <BtnSourcecode />
          </div>
          <div className="block sm:hidden">
            <NavCollapseBtn />
          </div>
        </div>
      </header>
      <NavMenuCollapse menus={menus} />
    </>
  );
};

export default Header;
