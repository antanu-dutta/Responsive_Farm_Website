import React from "react";
import "./Footer.css";

import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

function Footer() {
  return (
    <div className="footer">
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}

export default Footer;
