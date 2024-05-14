import { CircularProgress } from "@mui/material";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <CircularProgress sx={{ color: "hotpink" }} />
    </div>
  );
};

export default Loader;
