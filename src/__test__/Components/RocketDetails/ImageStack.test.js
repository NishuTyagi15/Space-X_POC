// src/Components/__tests__/ImageStack.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageStack from '../../../Components/RocketDetails/ImageStack';

describe('ImageStack Component', () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  test('renders ImageStack component', () => {
    render(<ImageStack images={images} />);
    expect(screen.getByAltText('Slide 0')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(2);
  });

  test('displays the correct image based on index', () => {
    render(<ImageStack images={images} />);
    expect(screen.getByAltText('Slide 0')).toBeInTheDocument();
    expect(screen.queryByAltText('Slide 1')).not.toBeInTheDocument();
  });

  test('previous button functionality', () => {
    render(<ImageStack images={images} />);
    const prevButton = screen.getAllByRole('button')[0];

    expect(screen.getByAltText('Slide 0')).toBeInTheDocument();

    fireEvent.click(prevButton);

    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
  });

  test('next button functionality', () => {
    render(<ImageStack images={images} />);
    const nextButton = screen.getAllByRole('button')[1];

    expect(screen.getByAltText('Slide 0')).toBeInTheDocument();

    fireEvent.click(nextButton);

    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
  });

  test('images stack', () => {
    render(<ImageStack images={images} />);
    const prevButton = screen.getAllByRole('button')[0];
    const nextButton = screen.getAllByRole('button')[1];

    fireEvent.click(nextButton);
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByAltText('Slide 0')).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
  });
});
