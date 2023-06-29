import RocketsReducer, {
  fetchRockets,
  reserveRocket,
  cancelReservation,
} from './rocketsSlice';

describe('RocketsSlice', () => {
  test('should handle fetchRockets pending', () => {
    const nextState = RocketsReducer(undefined, fetchRockets.pending());
    expect(nextState.loading).toBe(true);
  });

  test('should handle fetchRockets fulfilled', () => {
    const rocketsData = [{ id: '1', name: 'Falcon 9' }];
    const nextState = RocketsReducer(
      undefined,
      fetchRockets.fulfilled(rocketsData)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.rockets).toEqual(rocketsData);
  });

  test('should handle fetchRockets rejected', () => {
    const nextState = RocketsReducer(undefined, fetchRockets.rejected());
    expect(nextState.loading).toBe(false);
  });

  test('should handle reserveRocket', () => {
    const initialState = {
      rockets: [{ id: '1', name: 'Falcon 9', reserved: false }],
      loading: false,
    };
    const nextState = RocketsReducer(
      initialState,
      reserveRocket('1')
    );
    expect(nextState.rockets[0].reserved).toBe(true);
  });

  test('should handle cancelReservation', () => {
    const initialState = {
      rockets: [{ id: '1', name: 'Falcon 9', reserved: true }],
      loading: false,
    };
    const nextState = RocketsReducer(
      initialState,
      cancelReservation('1')
    );
    expect(nextState.rockets[0].reserved).toBe(false);
  });
});
