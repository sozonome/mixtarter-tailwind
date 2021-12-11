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
      <div>
        <img src="/404 Error-pana.svg" alt="Error 404 not found Illustration" />
      </div>
      <div>
        <a href="https://stories.freepik.com/web" target="_blank">
          Illustration by Freepik Stories
        </a>
      </div>

      <div>
        <h1>Page not Found.</h1>

        <div>
          <p>It&apos;s Okay!</p>
          <Link to="/">
            <button>Let&apos;s Head Back</button>
          </Link>
        </div>
      </div>
    </Document>
  );
};

export default CatchBoundary;
