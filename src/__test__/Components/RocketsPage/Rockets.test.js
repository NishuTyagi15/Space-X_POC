import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Mock store setup
const mockStore = createStore(reducer, applyMiddleware(thunk));
const mockFetchRocketsDetails = jest.fn();

// Helper function to render component with mocked Redux store
const renderWithStore = (component, store) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('Rockets Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Rockets with correct content', async () => {
    const mockRocketsDetails = [
      { id: '1', name: 'Falcon 1' },
      { id: '2', name: 'Falcon 9' },
    ];

    const store = createStore(rootReducer, {
      rocketsDetails: mockRocketsDetails
    }, applyMiddleware(thunk));

    renderWithStore(<Rockets fetchRocketsDetails={mockFetchRocketsDetails} />, store);

    await waitFor(() => {
      expect(screen.getByText('Falcon 1')).toBeInTheDocument();
      expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    });
  });

  test('calls fetchRocketsDetails on mount', () => {
    renderWithStore(<Rockets fetchRocketsDetails={mockFetchRocketsDetails} />, mockStore);

    expect(mockFetchRocketsDetails).toHaveBeenCalled();
  });

  test('renders RocketCard components for each rocket detail', async () => {
    const mockRocketsDetails = [
      { id: '1', name: 'Falcon 1' },
      { id: '2', name: 'Falcon 9' },
    ];

    const store = createStore(rootReducer, {
      rocketsDetails: mockRocketsDetails
    }, applyMiddleware(thunk));

    renderWithStore(<Rockets fetchRocketsDetails={mockFetchRocketsDetails} />, store);

    await waitFor(() => {
      expect(screen.getAllByText(/Falcon/)).toHaveLength(2); // Assumes RocketCard displays the name of the rocket
    });
  });
});
