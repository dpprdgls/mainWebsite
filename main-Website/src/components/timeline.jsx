import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './timelineItem';

function Timeline() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="w-100 w-md-75">
        <h1 className="display-4 mt-4 mb-4">Timeline</h1>
        {timeline.map(item => (
          <TimelineItem 
            key={item.id}
            year={item.year} 
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;