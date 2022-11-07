import { QueryClient, QueryClientProvider } from 'react-query';

import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test-utils';
import Home from './Home.page';

describe('Home', () => {
  it('should render correctly', () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
    );

    expect(
      screen.getByText(/Harga Crypto dalam Rupiah Hari Ini/i),
    ).toBeInTheDocument();
  });
});
