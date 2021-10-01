import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './miniplayer.css';

const MiniPlayer = () => {
    const buttonRef = useRef();
    const [status, setStatus] = useState(false);

    function toggleMiniPlayer() {
        if (!status) {
            buttonRef.current.classList.remove('floatingBtn');
            setStatus(true);
        } else {
            buttonRef.current.classList.add('floatingBtn');
            setStatus(false);
        }
    }

    return (
        <div
            role="button"
            tabIndex={0}
            ref={buttonRef}
            onClick={toggleMiniPlayer}
            className="miniPlayer floatingBtn"
        >
            <span className="material-icons-outlined open"> play_circle_filled </span>
            <span
                role="button"
                tabIndex={0}
                onClick={toggleMiniPlayer}
                className="material-icons-outlined close"
            >
                {' '}
                close{' '}
            </span>
            <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="300px"
                height="168px"
                controls
                playing={status}
            />
            <p>hello world</p>
        </div>
    );
};

export default MiniPlayer;
