import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const text = screen.getByText(/ernest/i);

  expect(text).toBeInTheDocument();
  // expect(text).toBeInTheDocument();
});
