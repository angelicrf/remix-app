import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

export function meta() {
  return { title: "Angelique-Remix-app" };
}
const allColors = {
  "app-blue": "#1E90FF",
  "app-red": "#8B0000",
  "app-gray": "#A9A9A9",
  "app-yellow": "#FFF8DC",
  "app-violet": "#9932CC",
  "app-cyan": "#008B8B",
  "app-white": "#F8F8FF",
  "app-lavendar" : "#FFF0F5"
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", backgroundColor: allColors["app-lavendar"] }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
