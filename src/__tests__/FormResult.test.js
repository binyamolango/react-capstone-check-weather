import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import FormResult from '../components/FormResult/formResult';

const initialState = {
  search: {
    location: 'London,GB',
  },
  home: {
    loading: false,
    location: [
      {
        lat: 51.5074,
        lon: -0.1278,
        name: 'London',
        state: 'England',
        country: 'United Kingdom',
      },
    ],
    error: '',
  },
  details: {
    details: {
      main: {
        temp: 20,
        pressure: 1012,
        humidity: 70,
      },
      weather: [
        {
          description: 'Cloudy',
        },
      ],
      wind: {
        speed: 5,
        deg: 180,
      },
      clouds: {
        all: 80,
      },
      rain: {
        '1h': 2,
      },
    },
  },
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

describe('FormResult component', () => {
  it('renders weather details correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormResult />
        </BrowserRouter>
      </Provider>,
    );

    const locationName = screen.getByText('London');
    const locationState = screen.getByText('England');
    const locationCountry = screen.getByText('United Kingdom');
    const temperature = screen.getByText('20');
    const weatherDescription = screen.getByText('Cloudy');
    const windSpeed = screen.getByText('5');
    const cloudiness = screen.getByText('80');
    const rainVolume = screen.getByText('2');
    const windDirection = screen.getByText('180');

    expect(locationName).toBeInTheDocument();
    expect(locationState).toBeInTheDocument();
    expect(locationCountry).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(weatherDescription).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
    expect(cloudiness).toBeInTheDocument();
    expect(rainVolume).toBeInTheDocument();
    expect(windDirection).toBeInTheDocument();
  });
});
