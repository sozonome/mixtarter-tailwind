import { Outlet } from "remix";
import type { LinksFunction } from "remix";

import appStyles from "./styles/app.css";
import tailwindStyles from "./styles/tailwind.css";

import { CatchBoundary, Document, ErrorBoundary } from "~/lib/root";

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: appStyles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Outfit",
    },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export { ErrorBoundary, CatchBoundary };

export default App;
