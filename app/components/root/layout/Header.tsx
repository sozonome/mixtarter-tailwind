import { Link } from "remix";

// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">mixtarter-tailwind</Link>
      </h1>

      <div>{/* <ThemeToggle /> */}</div>
    </header>
  );
};

export default Header;
