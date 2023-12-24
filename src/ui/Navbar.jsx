import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Navbar() {
  return (
    <nav className="bg-red-600 p-8 text-stone-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
}
