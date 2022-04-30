import { Link } from "remix";

const SomeText = () => {
  return (
    <div className="grid gap-2">
      <h2 className="text-3xl">Hello</h2>

      <div className="bg-gray-200 p-4 rounded-sm">
        <div className="text-sm">
          This is a Remix app with TailwindCSS v3 and TypeScript setup.
        </div>
      </div>

      <div>
        <Link to="/404">
          <button type="button" className="btn">
            404 Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SomeText;
