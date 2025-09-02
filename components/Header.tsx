
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
        TODO
      </h1>
    </header>
  );
};

export default Header;
