import React from 'react';
import '../css/Mission.css';
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  return (
    <section className="mission_Section">
      <span className="horizontal_Line" />
      <section className="mission_Table">
        <div className="mission_Header">
          <h4>Mission</h4>
          <h4>Description</h4>
          <h4>status</h4>
          <span />
        </div>
        {
          missions?.map((mission) => (
            <MissionItem mission={mission} missions={missions} key={mission.mission_id} />
          ))
        }
      </section>
    </section>
  );
};

export default Missions;
