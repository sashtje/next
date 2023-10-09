import Head from "next/head";

import { NavLink } from "../components/NavLink";

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="nextjs, app"/>
        <title>Main page</title>
      </Head>
      <main>
        <nav className="navbar">
          <NavLink href="/" text="Main" />
          <NavLink href="/users" text="Users" />
        </nav>

        <h1>Main page</h1>

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

export default Index;
