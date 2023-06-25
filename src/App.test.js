import { render, screen } from '@testing-library/react';
import App from './App';

test('check index page title', () => {
  render(<App />);
  const indexTitle = screen.getByTestId('main-container').querySelector(".PageTitle")
  expect(indexTitle).toHaveTextContent('Fibonacci List')
});
