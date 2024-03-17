import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

function Sidebar() {
  return (
    <div>
      {/* <Image
        src="/shivaImage.jpg"
        alt="profile imag"
        className="w-32 h-32 rounded-full"
      /> */}
      <div className="flex items-center justify-center">
        <img
          src="/shivaImage.jpg"
          alt="profile imag"
          className="w-32 h-32 rounded-full items-center"
        />
      </div>

      <h3 className="my-4 text-3xl font-medium tracking-wider italic">
        <span className="text-green-400">Shiva </span>
        Kumar
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Senior Software Engineear
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 my-5 text-green md:w-full mx-auto">
        <a href="">
          <FaYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex justify-center items-center space-x-2">
          <GoLocation />
          <span>Bengaluru,India</span>
        </div>
        <p className="my-2">shivakumararadyasm5@gmail.com</p>
        <p className="my-2">9008256510</p>
      </div>
      <button
        className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"
        // onClick={() => window.open('mailto:shivakumararadyasm5@gmail.com')}
      >
        Email Me
      </button>
      <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;
