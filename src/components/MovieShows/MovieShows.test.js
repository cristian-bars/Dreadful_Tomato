/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, waitFor } from '@testing-library/react';
import MovieShows from './index';

describe('App component', () => {
  test('it displays a list of movies', async () => {
    render(<MovieShows />);

    const movieList = await waitFor(() => screen.getByText('Under The Gun'));
    expect(movieList).toBeInTheDocument();
  });
});
