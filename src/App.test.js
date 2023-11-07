import { render, screen } from '@testing-library/react';
import App from './App';

test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/learn-link/i);
  expect(linkElement.href).toContain('ultimateqa.com');
});

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/ernest/i);
  expect(text).toBeInTheDocument();
});
