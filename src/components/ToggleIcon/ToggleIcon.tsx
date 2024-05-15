import { PayloadAction } from "@reduxjs/toolkit";
import { useToggle } from "../../hooks/useToggle";
import { useDispatch } from "react-redux";

type ToggleIconProps<T> = {
  trueIcon: string | React.ReactNode;
  falseIcon: string | React.ReactNode;
  name: string;
  thisDispatch: (payload: PayloadAction<T>) => PayloadAction<T>; // Ändra signatur för thisDispatch
  thisPayload: PayloadAction<T>;
};

const ToggleIcon = <T extends any>({
  trueIcon,
  falseIcon,
  name,
  thisDispatch,
  thisPayload,
}: ToggleIconProps<T>) => {
  const [isFavorit, toggleIsFavorit] = useToggle(false);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    toggleIsFavorit();
    dispatch(thisDispatch(thisPayload)); // Anropa dispatch med thisDispatch
  };

  return (
    <span className={`${name}`} onClick={handleOnClick}>
      {isFavorit ? trueIcon : falseIcon}{" "}
    </span>
  );
};

export default ToggleIcon;
