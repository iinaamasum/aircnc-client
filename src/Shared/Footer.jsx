import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Host Your Home', link: '/hostHome' },
    { id: 3, name: 'Share Your Experience', link: '/experience' },
  ];
  return (
    <footer class="footer footer-center p-10 bg-black text-white">
      <div class="grid grid-flow-col gap-4">
        {navLinks.map((links) => (
          <Link
            class="cursor-pointer btn-link text-blue-500"
            key={links.id}
            to={links.link}
          >
            {links.name}
          </Link>
        ))}
      </div>
      <div>
        <div class="grid grid-flow-col gap-2">
          <a
            href="https://www.facebook.com/iinaamasum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook
              size={30}
              className="mr-2 cursor-pointer hover:text-slate-600"
            />
          </a>
          <a
            href="https://github.com/iinaamasum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              size={30}
              className="mr-2 cursor-pointer hover:text-slate-600"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/iinaamasum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin
              size={30}
              className="mr-2 cursor-pointer hover:text-slate-600"
            />
          </a>
          <a
            href="https://twitter.com/iinaamasum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrTwitter
              size={30}
              className="cursor-pointer hover:text-slate-600"
            />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved </p>
        <p>Developed by iinaamasum</p>
      </div>
    </footer>
  );
};

export default Footer;
