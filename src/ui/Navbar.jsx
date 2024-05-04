import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Navbar() {
  return (
    <nav className="bg-white p-8 text-gray-900 shadow-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
}
