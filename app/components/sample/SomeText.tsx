import { Link } from "remix";

const SomeText = () => {
  return (
    <div>
      <h2>Hello</h2>

      <div>
        <div>This is a Remix app with Chakra-UI and TypeScript setup.</div>
      </div>

      <div>
        <Link to="/404">
          <button>404 Page</button>
        </Link>
      </div>
    </div>
  );
};

export default SomeText;
