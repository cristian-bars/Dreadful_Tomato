/* eslint-disable react/jsx-filename-extension */
import { ListItem, UnorderedList } from 'carbon-components-react';
import React from 'react';
import logo from '../../assets/logo.png';
import AppStore from '../../assets/app store.png';
import GooglePlay from '../../assets/google-play.png';

function Footer() {
  return (
    <footer>
      <div className="footerLogo">
        <img className="logoImg" src={logo} alt="Logo" />
      </div>
      <UnorderedList className="footerItems">
        <ListItem className="footerListItem">Home</ListItem>
        <ListItem className="footerListItem">Terms of Use</ListItem>
        <ListItem className="footerListItem">Legal Notices</ListItem>
        <ListItem className="footerListItem">Help</ListItem>
        <ListItem className="footerListItem">Manage Account</ListItem>
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

export default Footer;
