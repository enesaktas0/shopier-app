import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-red-600 p-8 text-stone-50">
      <Logo />
      <Menu />
    </nav>
  );
}
