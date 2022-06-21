import React, { useState } from "react";
import data from "../data/data";

export default function UserInput() {
    const [item_url, setItem_url] = useState("");

    const getNewMemeUrl = () => {
        setItem_url(
            data.data.memes[Math.floor(Math.random() * data.data.memes.length)]
                .url
        );
    };

    return (
        <div className="user-input">
            <div className="inputs">
                <input
                    className="top-input"
                    type="text"
                    placeholder="Top phrase"
                />
                <input
                    className="bottom-input"
                    type="text"
                    placeholder="Bottom phrase"
                />
            </div>
            <button onClick={getNewMemeUrl} className="get-button">
                Get a new meme image 🖼
            </button>
            {item_url && <img src={item_url} className="meme" />}
        </div>
    );
}
