/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, waitFor } from '@testing-library/react';
import Footer from './index';

describe('App component', () => {
  test('it displays the website footer', async () => {
    render(<Footer />);

    const footerList = await waitFor(() => screen.getByText('Copyright 2020'));
    expect(footerList).toBeInTheDocument();
  });
});
