import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LaunchInfo from '../../../Components/LaunchDetails/LaunchInfo';

const mockData = {
    title: 'Upcoming Launch',
    missionName: 'FalconSat',
    rocket: 'Falcon 1',
    flightNumber: 1,
    launchDate: '2024-09-15T14:00:00Z',
    links: {
        wikipedia: 'https://en.wikipedia.org/wiki/FalconSat',
        video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
        reddit_campaign: 'https://www.reddit.com/r/spacex',
        mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
    },
    launchpad: 'CCAFS LC-40'
};

describe('LaunchInfo Component', () => {
    test('renders correct info for previous launch', () => {
        const previousLaunchData = {
            ...mockData,
            title: 'Previous launch'
        };

        render(<LaunchInfo {...previousLaunchData} />);

        expect(screen.getByText(/CREW/i)).toBeInTheDocument();
        expect(screen.queryByText(/LAUNCHPAD/i)).not.toBeInTheDocument();
    });

    test('renders correct info for upcoming launch', () => {
        render(<LaunchInfo {...mockData} />);

        expect(screen.getByText(/LAUNCHPAD/i)).toBeInTheDocument();
        expect(screen.queryByText(/CREW/i)).not.toBeInTheDocument();
    });

    test('renders image with correct src and alt attributes', () => {
        render(<LaunchInfo {...mockData} />);

        const img = screen.getByAltText('logo');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', mockData.links.mission_patch_small);
    });
});
