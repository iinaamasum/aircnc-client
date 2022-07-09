import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer footer-center p-10 bg-black text-white">
      <div class="grid grid-flow-col gap-4">
        <Link to="/" class="cursor-pointer btn-link text-blue-500">
          About us
        </Link>
        <Link to="/" class="cursor-pointer btn-link text-blue-500">
          Contact
        </Link>
        <Link to="/" class="cursor-pointer btn-link text-blue-500">
          Jobs
        </Link>
        <Link to="/" class="cursor-pointer btn-link text-blue-500">
          Press kit
        </Link>
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
