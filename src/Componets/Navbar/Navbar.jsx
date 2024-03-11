import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src="/image/logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
