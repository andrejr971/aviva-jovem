import { render, screen } from '@testing-library/react';
import { Home } from '.';

describe('Home Template', () => {
  it('renders correctly', () => {
    render(<Home />);

    screen.logTestingPlaygroundURL();

    expect(screen.getByText('Boilerplate NextJS')).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    render(<Home />);

    expect(screen.getByRole('link', { name: /prettier/i })).toBeInTheDocument();
  });
});
