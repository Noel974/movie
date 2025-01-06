import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Mon Application. Tous droits réservés.
      </p>
      <p>
        Développé avec ❤️ par Amajnoel
      </p>
    </footer>
  );
};

export default Footer;
