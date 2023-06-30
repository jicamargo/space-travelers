import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MissionProfile from '../components/MissionProfile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

test('should render reserved missions correctly', () => {
  const reservedMissions = [
    { mission_id: '9D1B7E0', mission_name: 'Thaicom', reserved: true },
    { mission_id: 'F4F83DE', mission_name: 'Telstar', reserved: true },
  ];

  useSelector.mockReturnValue({ missions: reservedMissions });

  const { getByText } = render(<MissionProfile />);

  expect(getByText('My Missions')).toBeInTheDocument();
  expect(getByText('Thaicom')).toBeInTheDocument();
  expect(getByText('Telstar')).toBeInTheDocument();
});
