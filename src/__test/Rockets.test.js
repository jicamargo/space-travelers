import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Rockets from '../components/Rockets';

describe('Rockets component', () => {
  test('should render loading message when isLoading is true', () => {
    const store = configureStore({
      reducer: {
        rockets: () => ({ loading: true, rockets: [] }),
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('should render "No Rockets available" message when rockets array is empty', () => {
    const store = configureStore({
      reducer: {
        rockets: () => ({ loading: false, rockets: [] }),
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(getByText('No Rockets available')).toBeInTheDocument();
  });

  test('should render RocketCard component for each rocket in the rockets array', () => {
    const rockets = [
      {
        id: '1',
        name: 'Falcon 9',
        flickr_images: ['image1.jpg', 'image2.jpg'],
        country: 'USA',
        company: 'SpaceX',
        description: 'Rocket description',
        first_flight: '2006-03-24',
        success_rate_pct: 95,
        reserved: false,
      },
      {
        id: '2',
        name: 'Atlas V',
        flickr_images: ['image3.jpg', 'image4.jpg'],
        country: 'USA',
        company: 'ULA',
        description: 'Rocket description',
        first_flight: '2002-08-21',
        success_rate_pct: 98,
        reserved: true,
      },
    ];

    const store = configureStore({
      reducer: {
        rockets: () => ({ loading: false, rockets }),
      },
    });

    const { queryAllByTestId } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketCards = queryAllByTestId('rocket-card');
    expect(rocketCards.length).toBe(rockets.length);
  });
});
