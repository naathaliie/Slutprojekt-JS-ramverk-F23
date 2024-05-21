import "./MyButton.scss";

type MyButtonProps = {
  onClickFunction?: () => void;
  icon: string | React.ReactNode;
  name: string;
};

const MyButton: React.FC<MyButtonProps> = ({ onClickFunction, icon, name }) => {
  return (
    <>
      <button
        className={`MyButton ${name}`}
        onClick={onClickFunction && onClickFunction}
      >
        <span>{icon}</span>
      </button>
    </>
  );
};

export default MyButton;
