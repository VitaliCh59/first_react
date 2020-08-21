import React from 'react';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className = {c.nav}>
        <div className = {c.item}>
          <a>Profile</a>
        </div>
        <div className = {`${c.item} ${c.active}`}>
          <a>Messages</a>
        </div>
        <div className = {c.item}>
          News
        </div>
        <div className = {c.item}>
          Music
        </div>
        <div className = {c.item}>
          Settings
        </div>
      </nav>
    );
}

export default Navbar;