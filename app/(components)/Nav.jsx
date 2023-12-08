// import { faTicket } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoTicketOutline } from 'react-icons/io5';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <p className="icon">
            <AiOutlineHome size={30} />
          </p>
        </Link>
        <Link href="/TicketPage/new">
          <p className="icon">
            <IoTicketOutline size={30} />
          </p>
        </Link>
      </div>
      <div>
        <p className="text-default-text">fake@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
