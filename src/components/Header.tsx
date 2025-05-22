import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-secondary py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-accent">MovieDB</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-accent transition-colors">Categories</a></li>
          <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;