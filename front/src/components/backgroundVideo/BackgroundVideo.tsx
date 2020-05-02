import React, { useState, useCallback, useRef } from 'react';

import './BackgroundVideo.scss';

import playButton from '../../images/playButton.png';
import pauseButton from '../../images/pauseButton.png';

const BackgroundVideo: React.FC = () => {
    const [videoButton, setVideoButton] = useState<string>(pauseButton);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoPlay = useCallback(() => {
        if (videoButton === pauseButton) {
            setVideoButton(playButton);
            videoRef.current?.pause();
            videoRef.current?.classList.add('videoPaused');
        } else {
            setVideoButton(pauseButton);
            videoRef.current?.play();
            videoRef.current?.classList.remove('videoPaused');
        }
    }, [videoButton]);

    return (
        <>
            <img className="videoButton" src={videoButton} alt="PLAY/PAUSE" onClick={handleVideoPlay}/>
            <div className="backgroundVideo">
                <video autoPlay loop muted className="video" ref={videoRef}>
                    <source src={require("../../videos/hubVideo.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
};

export default BackgroundVideo;
