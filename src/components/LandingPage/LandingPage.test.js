/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import LandingPage from './index';

describe('App component', () => {
  test('it displays a list of users', async () => {
    render(<LandingPage />);
  });
});
