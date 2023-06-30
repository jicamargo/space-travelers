import MissionsReducer, { returnAllMissions } from '../redux/missions/missionsSlice';

describe('MissionsSlice', () => {
  test('should handle returnAllMissions pending', () => {
    const nextState = MissionsReducer(undefined, returnAllMissions.pending());
    expect(nextState.loading).toBe(true);
  });

  test('should handle returnAllMissions fulfilled', () => {
    const missionsData = [{ mission_id: '1', name: 'Mission 1' }];
    const nextState = MissionsReducer(
      undefined,
      returnAllMissions.fulfilled(missionsData),
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.missions).toEqual(missionsData);
  });
});
