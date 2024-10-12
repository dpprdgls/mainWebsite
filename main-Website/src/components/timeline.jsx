import React from 'react';

function TimelineItem({ year, title, duration, details }) {
  return (
    <div className='d-flex flex-column flex-md-row position-relative border-left'>
      <div className='mb-4 ml-4'>
        <div className='position-absolute bg-secondary rounded-circle border border-white' style={{ width: '12px', height: '12px', left: '-6px', top: '6px' }} />
        <div className='d-flex flex-wrap gap-2 flex-row align-items-center justify-content-start text-xs text-sm'>
          <span className='badge bg-dark text-white'>
            {year}
          </span>
          <h3 className='h5 text-dark'>
            {title}
          </h3>
          <div className='text-muted'>
            {duration}
          </div>
          <p className='text-body'>
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem