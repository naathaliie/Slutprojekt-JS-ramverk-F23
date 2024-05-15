import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] =useState<boolean>(initialValue);

  const toggle = () => {
    setValue(prevState => !prevState);
  };

  return [value, toggle] as const;
}