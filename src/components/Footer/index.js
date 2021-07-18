/* eslint-disable react/jsx-filename-extension */
import { ListItem, UnorderedList } from 'carbon-components-react';
import React from 'react';
import logo from '../../assets/logo.png';
import AppStore from '../../assets/app store.png';
import GooglePlay from '../../assets/google-play.png';

function Navigation() {
  return (
    <footer>
      <div className="footerLogo">
        <img className="logoImg" src={logo} alt="Logo" />
      </div>
      <UnorderedList className="footerItems">
        <ListItem>Home</ListItem>
        <ListItem>Terms of Use</ListItem>
        <ListItem>Legal Notices</ListItem>
        <ListItem>Help</ListItem>
        <ListItem>Manage Account</ListItem>
      </UnorderedList>
      <UnorderedList className="footerApps">
        <ListItem><img className="logoApp" src={AppStore} alt="Logo" /></ListItem>
        <ListItem><img className="logoApp" src={GooglePlay} alt="Logo" /></ListItem>
      </UnorderedList>
      <div className="footerCopy">
        Copyright 2020 dreadfull tomato streaming. All rights reserved
      </div>
    </footer>
  );
}

export default Navigation;
