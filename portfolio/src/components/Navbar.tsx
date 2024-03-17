'use client';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('');

  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    if (pathname == '/') {
      setActiveItem('About');
    }
    if (pathname == '/projects') {
      setActiveItem('Projects');
    }
    if (pathname == '/resume') {
      setActiveItem('Resume');
    }
  }, []);

  const NavItem = () => {
    return (
      <>
        {activeItem !== 'About' && (
          <Link href="/">
            <span
              className="hover:text-green-400"
              onClick={() => setActiveItem('About')}
            >
              About
            </span>
          </Link>
        )}
        {activeItem !== 'Projects' && (
          <Link href="/projects">
            <span onClick={() => setActiveItem('Projects')}>Projects</span>
          </Link>
        )}
        {activeItem !== 'Resume' && (
          <Link href="/resume">
            <span onClick={() => setActiveItem('Resume')}>Resume</span>
          </Link>
        )}
      </>
    );
  };

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-400 text-xl border-b-4 border-green-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="text-lg flex space-x-5">
        <NavItem />
      </div>
    </div>
  );
}

export default Navbar;
