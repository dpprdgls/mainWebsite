import React from 'react';

function TimelineItem({ year, title, duration, details }) {
  return (
    <div className="d-flex flex-column flex-md-row position-relative border-start border-secondary">
      <div className="mb-4 ms-4">
        <div className="position-absolute start-0 translate-middle bg-secondary border border-white rounded-circle" style={{ width: '1rem', height: '1rem', top: '0.5rem', left: '-0.5rem' }}></div>

        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-start">
          <span className="badge bg-dark px-2 py-1 text-white">
            {year}
          </span>
          <h3 className="h5 fw-bold text-dark mb-0">
            {title}
          </h3>
          <div className="text-muted">
            {duration}
          </div>
        </div>

        <p className="mt-2 text-muted">
          {details}
        </p>
      </div>
    </div>
  );
}

export default TimelineItem;