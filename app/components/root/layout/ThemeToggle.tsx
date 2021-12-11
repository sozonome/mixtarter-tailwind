import { useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const [colorMode] = useState<boolean>(false);

  // TODO: replace state above with appropriate handler
  return (
    <button type="button">{colorMode ? <RiMoonFill /> : <RiSunLine />}</button>
  );
};

export default ThemeToggle;
