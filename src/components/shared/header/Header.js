import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>Student Manager</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Profile</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
