import { memo } from 'react';

const Navbar = () => {
  return (

      <nav className='bg-black text-white px-4 py-4 w-full fixed top-0 left-0 right-0 z-50'>
        <div className='flex justify-end items-center w-full'>
            <div className='space-x-6'>
                <a href="#home" style={{ color: '#476EAE' }} className='hover:text-gray-400'>Home</a>
                <a href="#about" style={{ color: '#476EAE' }} className='hover:text-gray-400'>About Me</a>
                <a href="#projects" style={{ color: '#476EAE' }} className='hover:text-gray-400'>Projects</a>
                <a href="#contacts" style={{ color: '#476EAE' }} className='hover:text-gray-400'>Contacts</a>
<button style={{ background: 'linear-gradient(to right, #476EAE, #48B3AF)' }} className='text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mr-35'>Contact Me</button>

            </div>
        </div>
    </nav>

  );
};

export default memo(Navbar);
