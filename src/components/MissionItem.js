import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { GetMissions } from '../redux/missions/missionsSlice';

const MissionItem = ({ mission, missions }) => {
  const dispatch = useDispatch();
  return (
    <div className="mission_Item" data-testid="missionItem_testid">
      <h4>{mission.mission_name}</h4>
      <p>{mission.description}</p>
      <div className="buttonMember">
        <span style={{ backgroundColor: mission.reserved && 'rgb(0, 207, 162)' }}>
          {mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
        </span>
      </div>
      <div className="buttonMission">
        <button
          type="button"
          id={mission.reserved && 'leaveMission'}
          onClick={() => dispatch(GetMissions({ missions, id: mission.mission_id }))}
        >
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </div>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
    mission_id: PropTypes.string.isRequired,
  }).isRequired,
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
    mission_id: PropTypes.string.isRequired,
  })).isRequired,
};

export default MissionItem;
