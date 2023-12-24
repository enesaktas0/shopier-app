import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function AppLayout() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="mx-auto my-5 max-w-4xl">
        <Outlet />
      </main>
    </div>
  );
}
