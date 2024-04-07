import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { closeOpenNav } from "./app/features/basicSlice";

const App = () => {
  const { isDark, openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  const handleBody = () => {
    if (openNav) {
      dispatch(closeOpenNav());
    }
  };

  return (
    <div className={`${isDark ? "bg-slate-800 text-white" : "bg-white text-gray-800"}`}>
      <Header />
      <main onClick={handleBody} className="min-h-screen px-3 py-2 lg:px-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
