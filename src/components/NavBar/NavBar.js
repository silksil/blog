import React from "react";
import PropTypes from "prop-types";
import { TopNavBar } from "../../packages/navbar";
import Link from "next/link";

const NavBar = props => {
  const links = [
    { text: "Home", path: "home" },
    { text: "Blog", path: "blog" }
  ];

  const createNextLinks = links =>
    links.map(link => (
      <Link href={link.path}>
        <a>{link.text}</a>
      </Link>
    ));

  return <TopNavBar childrenRight={createNextLinks(links)} />;
};

NavBar.propTypes = {};

export default NavBar;
