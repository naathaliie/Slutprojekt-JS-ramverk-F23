import React from 'react';

type useToggleProps = {
    onClickFunction?: () => void;
    name: string;
    icon: string | React.ReactNode; 
};

const UseToggle: React.FC<useToggleProps> = ({ onClickFunction, name, icon }) => {
  return (
    <div>useToggle</div>
  );
};

export default UseToggle;
