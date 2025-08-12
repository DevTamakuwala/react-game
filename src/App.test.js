import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // Render the App component
  const nextPlayerText = screen.getByText(/Next player: Player 1/i); // Check for the initial game status text
  expect(nextPlayerText).toBeInTheDocument(); // Assert that the text is present in the document
});
