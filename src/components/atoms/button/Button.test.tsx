import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with a correct label', () => {
  render(<Button label='Submit'/>);
  const button = screen.getByText(/Submit/);
  expect(button).toBeInTheDocument();
});

test('allows for onClick handler to be passed in', () => {
  const onButtonClick = jest.fn()

  render(<Button label='Submit' onClick={onButtonClick}/>);
  const button = screen.getByText(/Submit/);
  fireEvent.click(button);

  expect(onButtonClick).toHaveBeenCalled();
});

test('can be disabled', () => {
  render(<Button label='Submit' disabled/>);
  const button = screen.getByText(/Submit/);
  expect(button).toBeDisabled();
});
