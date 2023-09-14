import React, { useRef } from 'react';
import Intro from '../VideoAssets/Tourism.mp4';
import { styled } from 'styled-components';

const IntroVideoContainer = styled.div`
  width: 100%;
  outline: none;
  margin-bottom: -10px;
  padding: 0px;
`;

const TheIntroVideo = styled.video`
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

function IntroVideo() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Manually reset the video to the beginning and play it again
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <IntroVideoContainer className="video-container ">
      <TheIntroVideo
        className="responsive-video"
        src={Intro}
        autoPlay
        loop
        muted
        playsInline
        onEnded={handleVideoEnded}
        ref={videoRef}
      ></TheIntroVideo>
    </IntroVideoContainer>
  );
}

export default IntroVideo;
