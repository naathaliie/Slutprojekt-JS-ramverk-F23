interface MyButtonProps {
  //Define props that my button component will accept
  onClick: () => void; // function to handle click event
  text: string; // text to display on the button
  className?: string; // optional prop for custom CSS class
}
export default MyButtonProps;
