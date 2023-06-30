import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RocketProfile from '../components/RocketProfile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

test('should render reserved rockets correctly', () => {
  const reservedRockets = [
    { id: '1', name: 'Falcon 9', reserved: true },
    { id: '2', name: 'Atlas V', reserved: true },
  ];

  useSelector.mockReturnValue({ rockets: reservedRockets });

  const { getByText } = render(<RocketProfile />);

  expect(getByText('Reserved Rockets')).toBeInTheDocument();
  expect(getByText('Falcon 9')).toBeInTheDocument();
  expect(getByText('Atlas V')).toBeInTheDocument();
});

test('should render "No reserved rockets" message when no rockets are reserved', () => {
  const reservedRockets = [];

  useSelector.mockReturnValue({ rockets: reservedRockets });

  const { getByText } = render(<RocketProfile />);

  expect(getByText('Reserved Rockets')).toBeInTheDocument();
  expect(getByText('No reserved rockets')).toBeInTheDocument();
});
