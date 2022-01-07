import react, {Fragment} from "react";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import globalStylesUrl from '~/styles/global.css'

export const links = () => [{rel: 'stylesheet', href: globalStylesUrl}]

export const meta = () => {
  
  const title = "Angelique-Remix-app"
  const description = "rhisRemixDescription"
  const keywords = 'remix,react,javascript'

  return {
    title,
    description,
    keywords
  }      
};
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
export default App => {
  return (
    <AllDocsApp>
        <LayOut>
          <Outlet />
        </LayOut>
     </AllDocsApp>
  );
}
const AllDocsApp = ({children, title}) => {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
       <title>{title ? title : 'Angelique remix-title'}</title>
    </head>
    <body style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", backgroundColor: allColors["app-lavendar"] }}>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
    </body>
  </html>
  )
}
const LayOut = ({ children }) => { 
  return (
    <Fragment>    
      <nav className="navbar">
      <Link to='/'>
         newLink
        </Link>
        <Link to='/posts'>
         Posts Route
      </Link>
      </nav>
      <div className="container">
      {children}
      </div>
      </Fragment>
  )
}
