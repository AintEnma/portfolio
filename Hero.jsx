import { memo } from 'react';
import HeroPic from '../assets/landscape-placeholder.svg'
const Hero = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'black', width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <div className='text-white text-center py-16 px-12'>
          <img src={HeroPic} alt="" 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover'/>
          <h1 className='text-4x1 font-bold'>
            I'm {""}
            <span style={{ background: 'linear-gradient(to right, #476EAE, #48B3AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Rom Denielle C. Navarro
            </span>
            , BSIT Student
          </h1>
          <p className='mt-4 text-lg text-gray-300'>
            An Aspiring IT Professional.
          </p>
          <p className='mt-4 text-lg text-gray-300'>
            Welcome to my Portfolio.
          </p>
          <div className='mt-8 space-x-4'>
            <button style={{ background: 'linear-gradient(to right, #43cea2, #185a9d)' }} className='text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full mr-4'>
              Contact With Me
            </button>
            <button style={{ background: 'linear-gradient(to right, #DC143C, #F75270)' }} className='text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full mr-4'>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
