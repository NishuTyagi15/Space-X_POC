// src/Components/__tests__/SidePanel.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SidePanel from '../../../Components/MainPanel/SidePanel';
import { spacexLogo } from '../../../Images/Icons';

// Mock the useEffect hook to simulate different pathnames
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
    useState: jest.fn()
}));

describe('SidePanel Component', () => {
    let useEffect;
    let useState;
    let setActive;

    beforeEach(() => {
        useEffect = jest.spyOn(React, 'useEffect');
        useState = jest.spyOn(React, 'useState');
        setActive = jest.fn();

        useState.mockImplementation(init => [init, setActive]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders SidePanel component', () => {
        render(<SidePanel />);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Rockets')).toBeInTheDocument();
    });

    test('active class is set correctly based on pathname', () => {
        delete window.location;
        window.location = { pathname: '/rockets' };

        render(<SidePanel />);

        expect(screen.getByText('Rockets')).toHaveClass('nav-options');
        expect(screen.getByText('Dashboard')).toHaveClass('nav-options active');
    });

    test('active class is set correctly for the Dashboard', () => {
        delete window.location;
        window.location = { pathname: '/' };

        render(<SidePanel />);

        expect(screen.getByText('Dashboard')).toHaveClass('active');
        expect(screen.getByText('Rockets')).not.toHaveClass('active');
    });
});
