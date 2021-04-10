import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from './';

test('renders learn react link', () => {
  render(<Heading>Hello</Heading>);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
