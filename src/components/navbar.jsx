import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <span className="navbar-brand">
        Counter{" "}
        <span className="badge badge-warning badge-pill p-2">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
