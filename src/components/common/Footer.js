import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark p-5 d-flex justify-content-center">
            <footer>
                <h5 className="text-light">Santi Martínez, {new Date().getFullYear()}</h5>
            </footer>
        </div>
    )
}

export default Footer;