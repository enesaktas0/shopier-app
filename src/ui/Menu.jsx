import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <ul>
        <Link to="/categories" className="font-bold">
          Categories
        </Link>
      </ul>
    </div>
  );
}
