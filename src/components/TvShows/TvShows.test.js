/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, waitFor } from '@testing-library/react';
import TvShows from './index';

describe('App component', () => {
  test('it displays a list of users', async () => {
    render(<TvShows />);

    const userList = await waitFor(() => screen.getByTestId('user-list'));
    expect(userList).toBeInTheDocument();
  });
});
