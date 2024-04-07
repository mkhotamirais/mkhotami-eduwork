import { useLocation } from "react-router-dom";

export const usePath = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  return [path];
};
