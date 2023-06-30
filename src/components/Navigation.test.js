import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

test('should render navigation links correctly', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  );

  expect(getByText('Space Travelers')).toBeInTheDocument();
  expect(getByText('Rockets')).toBeInTheDocument();
  expect(getByText('Missions')).toBeInTheDocument();
  expect(getByText('Profile')).toBeInTheDocument();
});
