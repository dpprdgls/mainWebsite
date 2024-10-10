import React from 'react';

import portfolio from '../data/portfolio';
import PortfolioItem from './portfolioItem';

function Portfolio() {

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Portfolio Title */}
      <div className="mt-20">
        <h1 className="text-4xl">Portfolio</h1>
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {portfolio.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            stack={item.stack}
            link={item.link}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
  }
export default Portfolio;