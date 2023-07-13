import React from "react";
// import logo from "../public/img/josiah-brown-navbar-logo.png";

export default function Navbar() {
    return (
        <nav className="fixed flex justify-center p-4 md:px-8 w-screen h-20">
            <div className="flex-1"></div>
            <img className="flex-1 object-cover h-20" src="../img/josiah-brown-navbar-logo.png" alt="" />
            <div className="flex-1"></div>
        </nav>
    )
}