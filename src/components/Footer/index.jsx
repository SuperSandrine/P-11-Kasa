import React from 'react';
import logoOfFooter from "../../assets/LOGO-footer.svg"


const Footer = () => {
  return (
    <footer>
      <img src={logoOfFooter}alt='logo de Kasa' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
