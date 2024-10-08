const Navbar = () => {
  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between h-[8vh]">
        <h1>Logo</h1>
        <nav>
          <ul className="flex items-center justify-between gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
