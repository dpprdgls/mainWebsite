
// PortfolioItem component
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function PortfolioItem({ title, imgUrl, stack, link, github }) {
  return (
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
      <div className='w-full h-36 md:h-48 overflow-hidden'>
        <img className='w-full h-full object-cover cursor-pointer' src={imgUrl} alt={title} />
      </div>
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:m-3 font-semibold'>{title}</h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
          {stack.map((item, index) => (
            <span key={index} className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
              {item}
            </span>
          ))}
        </p>
        <div className="flex gap-4">
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <button className='text-gray-600 border-2 rounded-md border-gray-600 px-8 py-4 flex items-center hover:bg-orange-600 hover:text-white'>
              <span>App</span>
              <HiArrowNarrowRight className='ml-2'/>
            </button>
          </a>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <button className='text-gray-600 border-2 rounded-md border-gray-600 px-8 py-4 flex items-center hover:bg-orange-600 hover:text-white'>
              <span>Github</span>
              <HiArrowNarrowRight className='ml-2'/>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
