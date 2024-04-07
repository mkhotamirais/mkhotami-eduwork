import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { usePath } from "../hooks/usePath";
import { closeOpenNav } from "../app/features/basicSlice";

const NavMenuContent = ({ menus }) => {
  const [active, setActive] = useState(null);
  const [path] = usePath();
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  const handleNavMenu = (menu) => {
    if (menu === "") menu = "home";
    setActive(menu);
    if (openNav) dispatch(closeOpenNav());
  };

  useEffect(() => {
    if (path[1] === "") path[1] = "home";
    setActive(path[1]);
  }, [path]);

  return menus.map((menu, i) => (
    <NavLink
      onClick={() => handleNavMenu(menu)}
      key={i}
      to={menu === "home" ? "" : menu}
      className={`${
        active === menu ? "text-cyan-600" : ""
      } capitalize hover:text-cyan-600 py-2 border-b border-slate-400 sm:border-none`}
    >
      {menu}
    </NavLink>
  ));
};

export const NavMenu = ({ menus }) => {
  return (
    <div className="hidden sm:flex gap-3">
      <NavMenuContent menus={menus} />
    </div>
  );
};
NavMenu.propTypes;

export const NavMenuCollapse = ({ menus }) => {
  const { openNav, isDark } = useSelector((state) => state.basic);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${openNav ? "h-40 border-b py-3" : "h-0 py-0 border-none"} ${
        isDark ? "bg-slate-800 text-white" : "bg-white"
      } block sm:hidden rounded overflow-hidden transition-all duration-200 px-3 sticky top-16`}
    >
      <div className="flex flex-col">
        <NavMenuContent menus={menus} />
      </div>
    </div>
  );
};
NavMenuCollapse.propTypes;
