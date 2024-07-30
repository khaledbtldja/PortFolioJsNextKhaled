"use client";

import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar';
import React from 'react';

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const noNavbarRoutes = ['/login', '/Comment'];

  const showNavbar = !noNavbarRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

export default ClientLayout;
