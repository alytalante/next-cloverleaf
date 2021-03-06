import seemore from "../public//images/seemore.png";
import seemoreclicked from "../public//images/seemoreclicked.png";
import Dropdown from "./Dropdown";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Navigation() {
  const [menuURL, setmenuURL] = useState(seemore);
  const [dropdown, setdropdown] = useState(false);

  function showDropdown() {
    if (dropdown === false) {
      setdropdown(true);
      setmenuURL(seemoreclicked);
    } else {
      setdropdown(false);
      setmenuURL(seemore);
    }
  }

  function hideDropdown() {
    console.log(1);
  }

  return (
    <nav>
      <Link href="/">
        <img
          src="./images/mathlogo.png"
          className="logo"
          alt="cloverleaf math logo"
        />
      </Link>

      <div className="links">
        <Link href="/"> Home </Link>
        <Link href="/about"> About </Link>
        <Link href="/blog"> Blog </Link>
        <Link href="/contact"> Contact </Link>
      </div>

      <div onClick={() => showDropdown()}>
        {dropdown === true && <Dropdown />}
      </div>
      <img
        src="./images/seemore.png"
        className="seemore"
        onClick={() => showDropdown()}
        alt="dropdown image "
      />
    </nav>
  );
}

export default Navigation;
