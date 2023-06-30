import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RocketCard from '../components/RocketCard';

test('should render rocket card correctly', () => {
  const store = configureStore({
    reducer: {
      rockets: () => ({ loading: false, rockets: [] }),
    },
  });

  const rocketData = {
    id: '1',
    name: 'Falcon 9',
    flickr_images: ['image1.jpg', 'image2.jpg'],
    country: 'USA',
    company: 'SpaceX',
    description: 'Rocket description',
    first_flight: '2006-03-24',
    success_rate_pct: 95,
    reserved: false,
  };

  const { getByText } = render(
    <Provider store={store}>
      <RocketCard rocket={rocketData} />
    </Provider>,
  );

  expect(getByText('Falcon 9')).toBeInTheDocument();
  expect(getByText('Rocket description')).toBeInTheDocument();
});
