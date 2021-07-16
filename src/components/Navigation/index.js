/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderNavigation,
  HeaderMenuItem
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <HeaderContainer
      render={() => (
        <Header aria-label="Carbon Tutorial">
          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem element={Link} to="/tvshows">TVShows</HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/movieshows">MovieShows</HeaderMenuItem>
          </HeaderNavigation>
        </Header>
      )}
    />
  );
}

export default Navigation;
