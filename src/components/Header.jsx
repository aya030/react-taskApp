import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"></link>
      <div className="header-wrapper">
        <div className="header">
          <p>Task management App</p>
          <Link to="/">
            <p>Top</p>
          </Link>
        </div>
      </div>
    </>
  );
};
