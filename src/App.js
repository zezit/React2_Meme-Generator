import React from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import "./style/style.css";

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <UserInput/>
        </div>
    );
}
