import React from 'react';
import PropTypes from 'prop-types';

function RocketCard({ rocket }) {
  return (
    <article className="RocketCard">
      <div>
        <h2>{rocket.name}</h2>
      </div>
    </article>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketCard;
