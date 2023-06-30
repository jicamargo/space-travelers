import React from 'react';
import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';

const Rockets = () => {
  const isLoading = useSelector((state) => state.rockets.loading); // Add a loading state
  const Rockets = useSelector((state) => state.rockets.rockets);

  if (isLoading) { // Display loading message if data is still being fetched
    return (
      <section className="rockets">
        <header>
          <h2>Rockets</h2>
          <p>Loading...</p>
        </header>
      </section>
    );
  }

  if (!isLoading && Rockets.length === 0) {
    return (
      <section className="rockets">
        <header>
          <h2>Rockets</h2>
          <p>No Rockets available</p>
        </header>
      </section>
    );
  }

  return (
    <section className="rockets">
      {Rockets.map((rocket) => <RocketCard key={rocket.id} rocket={rocket} />)}
    </section>
  );
};

export default Rockets;
