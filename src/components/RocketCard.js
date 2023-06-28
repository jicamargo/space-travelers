import React from 'react';
import PropTypes from 'prop-types';
import './RocketCard.css';

function RocketCard({ rocket }) {
  return (
    <article className="RocketCard">
      <div className="RocketCard__header">
        <h2 className="RocketCard__name">{rocket.name}</h2>
      </div>
      <div className="RocketCard__body">
        <img className="RocketCard__image" src={rocket.flickr_images[0]} alt={rocket.name} />
        <div className="RocketCard__details">
          <p>
            <strong>Country:</strong>
            {' '}
            {rocket.country}
          </p>
          <p>
            <strong>Company:</strong>
            {' '}
            {rocket.company}
          </p>
          <p>
            <strong>Description:</strong>
            {' '}
            {rocket.description}
          </p>
          <p>
            <strong>First Flight:</strong>
            {' '}
            {rocket.first_flight}
          </p>
          <p>
            <strong>Success Rate:</strong>
            {' '}
            {rocket.success_rate_pct}
            %
          </p>
        </div>
      </div>
    </article>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    country: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    first_flight: PropTypes.string.isRequired,
    success_rate_pct: PropTypes.number.isRequired,
  }).isRequired,
};

export default RocketCard;
