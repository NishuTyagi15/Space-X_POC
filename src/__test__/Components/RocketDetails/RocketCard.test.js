import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RocketCard from '../../../Components/RocketDetails/RocketCard';

const mockStore = createStore((state = {}, action) => state);
const mockDialogState = jest.fn();

const renderWithStore = (component, store) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

xdescribe('RocketCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders RocketCard with correct content', () => {
    const rocketData = {
      name: 'Falcon 9',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      active: true,
    };

    renderWithStore(<RocketCard rocketData={rocketData} dialogState={mockDialogState} />, mockStore);

    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('STATUS')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  test('opens dialog on background image click', () => {
    const rocketData = {
      name: 'Falcon 9',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      active: true,
    };

    renderWithStore(<RocketCard rocketData={rocketData} dialogState={mockDialogState} />, mockStore);

    fireEvent.click(screen.getByTestId('rocket-background'));

    expect(mockDialogState).toHaveBeenCalledWith(true);
  });

  test('closes dialog on close button click', () => {
    const rocketData = {
      name: 'Falcon 9',
      flickr_images: ['image1.jpg', 'image2.jpg'],
      active: true,
    };

    renderWithStore(<RocketCard rocketData={rocketData} dialogState={mockDialogState} />, mockStore);

    fireEvent.click(screen.getByTestId('rocket-background'));
    expect(mockDialogState).toHaveBeenCalledWith(true);

    fireEvent.click(screen.getByTestId('dialog-close-button'));
    expect(mockDialogState).toHaveBeenCalledWith(false);
  });

  test('uses default image when no flickr_images are provided', () => {
    const rocketData = {
      name: 'Falcon 9',
      flickr_images: [],
      active: true,
    };

    renderWithStore(<RocketCard rocketData={rocketData} dialogState={mockDialogState} />, mockStore);

    const backgroundImage = screen.getByTestId('rocket-background').style.backgroundImage;
    expect(backgroundImage).toContain('dummyImage.jpg');
  });
});
