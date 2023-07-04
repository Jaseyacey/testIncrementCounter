import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './IncrementPage';

describe('Counter component', () => {
  test('renders initial count', () => {
    render(<Counter />);
    const countElement = screen.getByText(/counter: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments count when Increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/counter: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('adds input value to count when Add button is clicked', () => {
    render(<Counter />);
    const inputElement = screen.getByPlaceholderText('Input value');
    const addButton = screen.getByText(/add/i);
    fireEvent.change(inputElement, { target: { value: '5' } });
    fireEvent.click(addButton);
    const countElement = screen.getByText(/counter: 5/i);
    expect(countElement).toBeInTheDocument();
  });

  test('ignores empty input value when Add button is clicked', () => {
    render(<Counter />);
    const inputElement = screen.getByPlaceholderText('Input value');
    const addButton = screen.getByText(/add/i);
    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.click(addButton);
    const countElement = screen.getByText(/counter: 0/i);
    expect(countElement).toBeInTheDocument();
  });
});
