import { useState, useEffect } from "react";
import {Nav} from 'react-bootstrap';
import Link from "next/link";

const MainNav = () => {

  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Link href="/">
          <Nav.Link href="/">Home</Nav.Link>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/blog">
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/about">
          <Nav.Link href="/about">About</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/contact">
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default MainNav;
