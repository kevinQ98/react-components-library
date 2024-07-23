import React, { useState } from 'react';
import './MagicButton.css';

const MagicButton = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className={`magic-container ${clicked ? 'magic-bg' : ''}`}>
            <button className={`magic-button ${clicked ? 'clicked hidden' : ''}`} onClick={handleClick}>
                {clicked ? '¡Descubre!' : 'Click Aquí'}
            </button>
            {clicked && (
                <div className="magic-modal">
                    <p>React.js es poderoso y versátil. ¡Explóralo!</p>
                    <button onClick={() => setClicked(false)}>Cerrar</button>
                </div>
            )}
            <div className={`magic-effect ${clicked ? 'show' : ''}`}></div>
            <div className="floating-cubes">
                <div className="cube cube1">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                <div className="cube cube2">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                <div className="cube cube3">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>
        </div>
    );
};

export default MagicButton;
