import { PayloadAction } from "@reduxjs/toolkit";
import { useToggle } from "../../hooks/useToggle";
import { useDispatch } from "react-redux";

type ToggleIconProps<T> = {
  trueIcon: string | React.ReactNode;
  falseIcon: string | React.ReactNode;
  trueName: string;
  falseName: string;
  trueDispatch: (payload: PayloadAction<T>) => PayloadAction<T>;
  truePayload: PayloadAction<T>;
  falseDispatch: (payload: PayloadAction<T>) => PayloadAction<T>;
  falsePayload: PayloadAction<T>;
};

const ToggleIcon = <T extends any>({
  trueIcon,
  falseIcon,
  trueName,
  falseName,
  trueDispatch,
  truePayload,
  falseDispatch,
  falsePayload,
}: ToggleIconProps<T>) => {
  const [isFavorit, toggleIsFavorit] = useToggle(false);
  const dispatch = useDispatch();

  const trueHandleOnClick = () => {
    toggleIsFavorit();
    dispatch(trueDispatch(truePayload));
  };

  const falseHandleOnClick = () => {
    toggleIsFavorit();
    dispatch(falseDispatch(falsePayload));
  };

  return (
    <>
      {isFavorit ? (
        <span className={trueName} onClick={trueHandleOnClick}>
          {trueIcon}
        </span>
      ) : (
        <span className={falseName} onClick={falseHandleOnClick}>
          {falseIcon}
        </span>
      )}
    </>
  );
};

export default ToggleIcon;
