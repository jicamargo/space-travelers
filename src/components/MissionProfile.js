import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const { missions } = useSelector((state) => state.missions);

  const [reservedMissions, setReservedMissions] = useState([]);

  useEffect(() => {
    const reservationStatusMissions = missions.filter((mission) => mission.reserved);
    setReservedMissions(reservationStatusMissions);
  }, [missions]);

  return (
    <div className="profileMission">
      <h2>My Missions</h2>
      {reservedMissions.length > 0 ? (
        reservedMissions.map((mission) => (
          <span key={mission.mission_id}>
            {mission.mission_name}
          </span>
        ))
      ) : (
        <span>No reserved missions</span>
      )}
    </div>
  );
};

export default MissionProfile;
