import * as React from 'react';
import { useState } from 'react';
import './SideButton.scss';

const SideButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`top-right ${isOpen ? 'open' : ''}`}>
      <a className="disc l1">
        <div>Messages</div>
      </a>
      <a className="disc l2">
        <div>Photos</div>
      </a>
      <a className="disc l3">
        <div>Profile</div>
      </a>
      <a className="disc l4">
        <div>Likes</div>
      </a>
      <a
        className="disc l5 toggle"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Menu
      </a>
    </nav>
  );
};

export default SideButton;
