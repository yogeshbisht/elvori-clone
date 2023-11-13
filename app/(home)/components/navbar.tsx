"use client";

import React from "react";
import Image from "next/image";

import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #89071f;
`;

const NavbarComponent = () => {
  return (
    <Navbar>
      <Image
        src="/icons/elvori_logo.svg"
        alt="Elvori Logo"
        width="100"
        height="48"
      />
      <StyledLink href="/login">Log in</StyledLink>
    </Navbar>
  );
};

export default NavbarComponent;
