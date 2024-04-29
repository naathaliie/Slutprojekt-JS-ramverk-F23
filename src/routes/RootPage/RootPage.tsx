import { Outlet } from "react-router-dom";
import "./RootPage.scss";

const RootPage = () => {
  return (
    <div>
      RootPage <Outlet />
    </div>
  );
};

export default RootPage;
