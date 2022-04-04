import { render, screen } from '@testing-library/react';
import Index from '../../pages';

describe('Home Template', () => {
  it('renders correctly', () => {
    render(<Index />);

    expect(screen.getByText('Boilerplate NextJS')).toBeInTheDocument();
  });
});
