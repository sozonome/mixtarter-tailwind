import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  return <button>{true ? <RiMoonFill /> : <RiSunLine />}</button>;
};

export default ThemeToggle;
