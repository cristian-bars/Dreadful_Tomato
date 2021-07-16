/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems
} from 'carbon-components-react';
import {
  Logout32
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navigation() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="">
            <img className="logoImg" src={logo} alt="Logo" />
          </HeaderName>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem element={Link} to="/tvshows">TV Shows</HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/movieshows">Movie Shows</HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/tvshows">TV Shows</HeaderMenuItem>
                <HeaderMenuItem href="/movieshows">Movie Shows</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
              <Logout32 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
}

export default Navigation;
