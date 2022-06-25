import React, { useState, useEffect } from "react";

export default function UserInput() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        showPhrases: false,
    });

    const [allMemes, setallMemes] = useState("");
    useEffect(() => {
        console.log("RUNNING");
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setallMemes(data));
    }, []);

    const getNewMemeUrl = () => {
        const memesArray = allMemes.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    };

    const getInputValue = (event) => {
        const { value, name } = event.target;
        setMeme((prev) => ({
            ...prev,
            [name]: value,
            showPhrases: false,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMeme((prev) => ({
            ...prev,
            showPhrases: true,
        }));
    };

    return (
        <div className="user-input">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input
                        className="top-input"
                        type="text"
                        placeholder="Top phrase"
                        name="topText"
                        onChange={getInputValue}
                        value={meme.topText}
                    />
                    <input
                        className="bottom-input"
                        type="text"
                        placeholder="Bottom phrase"
                        name="bottomText"
                        onChange={getInputValue}
                        value={meme.bottomText}
                    />
                </div>
                <button onClick={getNewMemeUrl} className="get-button">
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                {meme.showPhrases && (
                    <h2 className="meme--text top">{meme.topText}</h2>
                )}
                {meme.showPhrases && (
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                )}
            </div>
        </div>
    );
}
