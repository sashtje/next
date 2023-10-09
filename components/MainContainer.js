import Head from "next/head";

import {NavLink} from "./NavLink";

export const MainContainer = ({children, title, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={`nextjs, app${keywords}`} />
        <title>{title}</title>
      </Head>

      <main>
        <nav className="navbar">
          <NavLink href="/" text="Main" />
          <NavLink href="/users" text="Users" />
        </nav>

        <div>
          {children}
        </div>

        <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
          `}
        </style>
      </main>
    </>
  );
};
