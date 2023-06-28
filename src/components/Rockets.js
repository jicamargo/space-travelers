import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketCard from './RocketCard';

const Rockets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.rockets.loading); // Add a loading state
  const Rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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

  if (Rockets.length === 0) {
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
