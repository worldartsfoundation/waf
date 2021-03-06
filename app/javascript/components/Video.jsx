import React, { useRef, useState } from "react";
import classNames from 'classnames';

const Video = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const vidRef = useRef(null);
    const cmptClasses = classNames({
        'cmpt-video': true,
        '--is-light': props.themeLight,
        '--is-dark': !props.themeLight,
        '--is-playing': isPlaying
    });

    const text = props.text ? props.text : "";

    function togglePlayback() {
        if (vidRef.current.paused) {
            vidRef.current.play();
            setIsPlaying(true);
        } else {
            vidRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className={cmptClasses}>
            <div className="global-container">
                <div className="cmpt-video-wrapper">
                    <div className="cmpt-video-inner">
                        <button onClick={togglePlayback} className="cmpt-video-button">{isPlaying ? "PAUSE" : "PLAY"}</button>
                        <video
                            className="cmpt-video-player"
                            poster={props.poster}
                            ref={vidRef}
                        >

                            <source src={props.videoSrc}
                                type="video/webm" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                </div>
                <div className="cmpt-video__text" dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
        </div>
    );
}

export default Video;