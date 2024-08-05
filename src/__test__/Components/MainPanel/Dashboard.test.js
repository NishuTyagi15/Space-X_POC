// src/Components/__tests__/Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dashboard from '../../../Components/MainPanel/Dashboard';
import { previousLaunch, upcomingLaunch } from '../../../Components/Actions/action';

jest.mock('../LaunchDetails/LaunchInfo', () => () => <div>LaunchInfo Component</div>);
jest.mock('../LaunchFacilities/LaunchFacilities', () => () => <div>LaunchFacilities Component</div>);
jest.mock('../Starlink/Starlink', () => () => <div>Starlink Component</div>);
jest.mock('../Actions/action');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Dashboard Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            upcomingLaunchDetails: {
                mission_name: 'Test Mission',
                rocket: { rocket_name: 'Test Rocket' },
                flight_number: '12345',
                launch_date_utc: '2023-01-01T00:00:00Z',
                links: { wikipedia: 'https://en.wikipedia.org/wiki/Test_Mission' },
                launch_site: { site_name: 'Test Site' }
            },
            previousLaunchDetails: {
                mission_name: 'Previous Mission',
                rocket: { rocket_name: 'Previous Rocket' },
                flight_number: '54321',
                launch_date_utc: '2022-01-01T00:00:00Z',
                links: { wikipedia: 'https://en.wikipedia.org/wiki/Previous_Mission' },
                crew: 'Previous Crew'
            }
        });

        upcomingLaunch.mockImplementation(() => () => {});
        previousLaunch.mockImplementation(() => () => {});
    });

    test('renders Dashboard component and dispatches actions', () => {
        render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );

        // Check if the Dashboard components are rendered
        expect(screen.getByText('LaunchInfo Component')).toBeInTheDocument();
        expect(screen.getByText('LaunchFacilities Component')).toBeInTheDocument();
        expect(screen.getByText('Starlink Component')).toBeInTheDocument();

        // Check if the actions are dispatched
        expect(upcomingLaunch).toHaveBeenCalledTimes(1);
        expect(previousLaunch).toHaveBeenCalledTimes(1);
    });

    test('displays the upcoming launch details correctly', () => {
        render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );

        // Check the upcoming launch details
        expect(screen.getByText('Upcoming launch')).toBeInTheDocument();
        expect(screen.getByText('Test Mission')).toBeInTheDocument();
        expect(screen.getByText('Test Rocket')).toBeInTheDocument();
        expect(screen.getByText('12345')).toBeInTheDocument();
        expect(screen.getByText('Test Site')).toBeInTheDocument();
    });

    test('displays the previous launch details correctly', () => {
        render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );

        // Check the previous launch details
        expect(screen.getByText('Previous launch')).toBeInTheDocument();
        expect(screen.getByText('Previous Mission')).toBeInTheDocument();
        expect(screen.getByText('Previous Rocket')).toBeInTheDocument();
        expect(screen.getByText('54321')).toBeInTheDocument();
        expect(screen.getByText('Previous Crew')).toBeInTheDocument();
    });
});
