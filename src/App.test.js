import { render, screen } from '@testing-library/react';
import App from './App';

describe('Check index page title', () => {
  test('Check index page title', () => {
    render(<App />);
    const indexTitle = screen.getByTestId('main-container').querySelector(".PageTitle")
    expect(indexTitle).toHaveTextContent('Fibonacci')
  });
});
