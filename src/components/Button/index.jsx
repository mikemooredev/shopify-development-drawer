import "./Button.css";

const Button = ({ children, onClick }) => (
  <button class="Button" onClick={onClick}>{children}</button>
);
export default Button;