import { render, screen } from '@testing-library/react';
import FibListPage from '../pages/fibListPage';

describe('Check index page title', () => {
  test('Check fibonacci page title', async () => {
    render(<FibListPage />);
    const indexTitle = screen.getByTestId('fibList-container').querySelector(".PageTitle")
    expect(indexTitle).toHaveTextContent('Fibonacci List')
  });
  test('Check fibonacci number returned', async () => {
    render(<FibListPage />);
    const febNumber = await screen.findByTestId('0')
    expect(febNumber).toBeInTheDocument('0')
  });
});