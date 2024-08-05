import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RocketDialog from '../../../Components/RocketDetails/RocketDialog';

// Mocking Redux store and actions
const mockStore = createStore((state = {}, action) => state);
const mockDialogState = jest.fn();

const mockRocketData = {
  name: 'Falcon 9',
  flickr_images: ['image1.jpg', 'image2.jpg'],
  description: 'A reusable rocket',
};

const renderWithStore = (component, store) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

xdescribe('RocketDialog Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders RocketDialog with correct content', () => {
    renderWithStore(<RocketDialog open={true} rocketData={mockRocketData} dialogState={mockDialogState} onClose={() => {}} />, mockStore);

    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('DESCRIPTION')).toBeInTheDocument();
    expect(screen.getByText('A reusable rocket')).toBeInTheDocument();
  });

  test('displays Overview tab content by default', () => {
    renderWithStore(<RocketDialog open={true} rocketData={mockRocketData} dialogState={mockDialogState} onClose={() => {}} />, mockStore);

    expect(screen.getByAltText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('DESCRIPTION')).toBeInTheDocument();
  });

  test('displays Photos tab content when Photos tab is clicked', () => {
    renderWithStore(<RocketDialog open={true} rocketData={mockRocketData} dialogState={mockDialogState} onClose={() => {}} />, mockStore);

    fireEvent.click(screen.getByText('Photos'));

    expect(screen.getByTestId('image-stack')).toBeInTheDocument(); // Assumes ImageStack component has a test ID
  });

  test('calls dialogState with false when close button is clicked', () => {
    renderWithStore(<RocketDialog open={true} rocketData={mockRocketData} dialogState={mockDialogState} onClose={() => {}} />, mockStore);

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(mockDialogState).toHaveBeenCalledWith(false);
  });

  test('tab switches correctly between Overview and Photos', () => {
    renderWithStore(<RocketDialog open={true} rocketData={mockRocketData} dialogState={mockDialogState} onClose={() => {}} />, mockStore);

    fireEvent.click(screen.getByText('Photos'));
    expect(screen.getByText('Photos')).toHaveClass('tabActive');
    expect(screen.getByText('Overview')).toHaveClass('tab');

    fireEvent.click(screen.getByText('Overview'));
    expect(screen.getByText('Overview')).toHaveClass('tabActive');
    expect(screen.getByText('Photos')).toHaveClass('tab');
  });

  test('uses default image when no flickr_images are provided', () => {
    const emptyRocketData = { ...mockRocketData, flickr_images: [] };

    renderWithStore(<RocketDialog open={true} rocketData={emptyRocketData} dialogState={mockDialogState} onClose={() => {}} />, mockStore);

    expect(screen.getByAltText('Falcon 9').src).toContain('dummyImage.jpg'); // Assumes fallback image handling
  });
});
