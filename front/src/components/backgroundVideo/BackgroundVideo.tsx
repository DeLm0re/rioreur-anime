import React from 'react';

import './BackgroundVideo.scss';

const BackgroundVideo: React.FC = () => {
    return (
        <div className="backgroundVideo">
            <video autoPlay loop muted className="video">
                <source src={require("../../videos/hubVideo.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
