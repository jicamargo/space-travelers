import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MissionItem from '../components/MissionItem';

test('should render rocket card correctly', () => {
  const store = configureStore({
    reducer: {
      missions: () => ({ loading: false, missions: [] }),
    },
  });

  const missionsX = [
    {
      mission_name: 'Thaicom',
      mission_id: '9D1B7E0',
      manufacturers: ['Orbital ATK'],
      payload_ids: ['Thaicom 6', 'Thaicom 8'],
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
      website: 'http://www.thaicom.net/en/satellites/overview',
      twitter: 'https://twitter.com/thaicomplc',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      reserved: true,
    },
    {
      mission_name: 'Telstar',
      mission_id: 'F4F83DE',
      manufacturers: ['SSL'],
      payload_ids: ['Telstar 19V', 'Telstar 18V'],
      wikipedia: 'https://en.wikipedia.org/wiki/Telesat',
      website: 'https://www.telesat.com/',
      twitter: null,
      description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
      reserved: true,
    },
  ];

  const missionData = {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    manufacturers: ['Orbital ATK'],
    payload_ids: ['Thaicom 6', 'Thaicom 8'],
    wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
    website: 'http://www.thaicom.net/en/satellites/overview',
    twitter: 'https://twitter.com/thaicomplc',
    description: 'Thaicom descriptions',
    reserved: true,
  };

  const { getByText } = render(
    <Provider store={store}>
      <MissionItem mission={missionData} missions={missionsX} />
    </Provider>,
  );

  expect(getByText('Thaicom')).toBeInTheDocument();
  expect(getByText('Thaicom descriptions')).toBeInTheDocument();
});
