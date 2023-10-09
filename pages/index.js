import Link from "next/link";

const Index = () => {
  return (
    <main>
      <nav className="navbar">
        <Link href="/" style={{"textDecoration": "none", "color": "white", "fontSize": "20px", "margin": "10px"}}
        >
          Main
        </Link>
        <Link href="/users" style={{"textDecoration": "none", "color": "white", "fontSize": "20px", "margin": "10px"}}
        >
          Users
        </Link>
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
  );
};

export default Index;
