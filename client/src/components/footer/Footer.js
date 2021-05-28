import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div class="stickyfooter">
      <footer>
        <div id='f'>
         
        </div>
        &copy; {new Date().getFullYear()} Pet Adoption
      </footer>
    </div>
  );
}

export default Footer;
