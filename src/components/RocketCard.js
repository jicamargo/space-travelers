import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

import '../css/Rockets.css';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();

  const isReserved = rocket.reserved;

  const handleReservation = () => {
    if (isReserved) {
      dispatch(cancelReservation(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };

  return (
    <article className="RocketCard">
      <div className="RocketCard__header">
        <h2 className="RocketCard__name">{rocket.name}</h2>
        {isReserved && <span className="RocketCard__reserved-label">Reserved</span>}
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
          <div className="RocketCard__reservation">
            <button type="button" className="RocketCard__reservation-button" onClick={handleReservation}>
              {isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
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
    reserved: PropTypes.bool.isRequired,
  }).isRequired,

};

export default RocketCard;
