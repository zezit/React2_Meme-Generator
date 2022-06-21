import React from "react";
import logo from "../images/Logo.svg";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <span>React Course - Project 3</span>
        </header>
    );
}
