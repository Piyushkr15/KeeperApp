import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {year} - Piyush</p>
        </footer>
    );
}

export default Footer;
