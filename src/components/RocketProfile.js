import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const [reservedRockets, setReservedRockets] = useState([]);

  useEffect(() => {
    const reservationStatusRockets = rockets.filter((rocket) => rocket.reserved);
    setReservedRockets(reservationStatusRockets);
  }, [rockets]);

  return (
    <div className="profileRocket">
      <h2>Reserved Rockets</h2>
      {reservedRockets.length > 0 ? (
        reservedRockets.map((rocket) => (
          <span key={rocket.id}>{rocket.name}</span>
        ))
      ) : (
        <span>No reserved rockets</span>
      )}
    </div>
  );
};

export default RocketProfile;
