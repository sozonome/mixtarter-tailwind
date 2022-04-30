import { Link } from "remix";

// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center font-bold">
      <h1 className="text-2xl">
        <Link to="/">mixtarter-tailwind</Link>
      </h1>

      <div>{/* <ThemeToggle /> */}</div>
    </header>
  );
};

export default Header;
