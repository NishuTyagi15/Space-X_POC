// src/Components/__test__/LaunchFacilities.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LaunchFacilities from '../../../Components/LaunchFacilities/LaunchFacilities';

describe('LaunchFacilities Component', () => {
    test('renders LaunchFacilities component with initial facilities', () => {
        render(<LaunchFacilities />);

        expect(screen.getByText(/Launch Facilities/i)).toBeInTheDocument();
        expect(screen.getByText(/Cape Canaveral/i)).toBeInTheDocument();
        expect(screen.getByText(/Starbase Boca Chica/i)).toBeInTheDocument();
        expect(screen.queryByText(/Vandenerg Base/i)).not.toBeInTheDocument(); // Initially, Vandenerg Base should not be rendered
    });

    test('renders correct weather information for initial facilities', () => {
        render(<LaunchFacilities />);

        expect(screen.getByText(/27°C/i)).toBeInTheDocument();
        expect(screen.getByText(/Clear/i)).toBeInTheDocument();
        expect(screen.getByText(/0 m\/s/i)).toBeInTheDocument();

        expect(screen.getByText(/Texas/i)).toBeInTheDocument();
        expect(screen.getByText(/3 m\/s/i)).toBeInTheDocument();
    });

    test('toggles additional facility on expand click', () => {
        render(<LaunchFacilities />);

        const expandButton = screen.getByText(/more/i);
        expect(expandButton).toBeInTheDocument();

        // Click to expand
        fireEvent.click(expandButton);

        expect(screen.getByText(/Vandenerg Base/i)).toBeInTheDocument();
        expect(screen.getByText(/11°C/i)).toBeInTheDocument();
        expect(screen.getByText(/Fog/i)).toBeInTheDocument();
        expect(screen.getByText(/2 m\/s/i)).toBeInTheDocument();
        expect(screen.getByText(/less/i)).toBeInTheDocument(); // Button text should change to 'less'

        // Click to collapse
        fireEvent.click(expandButton);

        expect(screen.queryByText(/Vandenerg Base/i)).not.toBeInTheDocument();
        expect(screen.getByText(/more/i)).toBeInTheDocument(); // Button text should change back to 'more'
    });

    test('displays correct information when expanded', () => {
        render(<LaunchFacilities />);

        const expandButton = screen.getByText(/more/i);
        fireEvent.click(expandButton);

        expect(screen.getByText(/California/i)).toBeInTheDocument();
        expect(screen.getByText(/USSF SLC-4E/i)).toBeInTheDocument();
    });

    test('renders correct icons for more and less', () => {
        render(<LaunchFacilities />);

        const expandButton = screen.getByText(/more/i);
        expect(expandButton).toBeInTheDocument();
        expect(screen.getByText(/more/i)).toContainHTML(moreIcon); // Check for the more icon

        // Click to expand
        fireEvent.click(expandButton);
        
        const lessButton = screen.getByText(/less/i);
        expect(lessButton).toBeInTheDocument();
        expect(screen.getByText(/less/i)).toContainHTML(moreIcon); // Check for the less icon
    });
});
