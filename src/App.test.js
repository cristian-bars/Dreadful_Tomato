/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('it render App', () => {
    render(<App />);
  });
});
