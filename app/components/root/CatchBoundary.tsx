import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";
import { Link, useCatch } from "remix";

import Document from "./Document";

// https://remix.run/docs/en/v1/api/conventions#catchboundary
const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
      <img
        src="/404 Error-pana.svg"
        alt="Error 404 not found Illustration"
        className="mx-auto w-full sm:w-[70%] md:w-[60%]"
      />
      <div className="text-center">
        <a
          href="https://stories.freepik.com/web"
          target="_blank"
          rel="noreferrer"
          className="text-xs"
        >
          Illustration by Freepik Stories
        </a>
      </div>

      <div className="my-4">
        <h1 className="text-2xl text-center">Page not Found.</h1>

        <div className="text-center">
          <p>It&apos;s Okay!</p>
          <Link to="/">
            <button type="button" className="btn">
              Let&apos;s Head Back
            </button>
          </Link>
        </div>
      </div>
    </Document>
  );
};

export default CatchBoundary;
