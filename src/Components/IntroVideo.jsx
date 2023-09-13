import React from 'react';
import Intro from '../VideoAssets/Tourism.mp4';
import { styled } from 'styled-components';
const IntroVideoContainer=styled.div`
width:100%;
`
const TheIntroVideo=styled.video`
width: 100%;
`
function IntroVideo() {
  return (
    <IntroVideoContainer className="video-container">
      <TheIntroVideo className="responsive-video" src={Intro} autoPlay loop muted />
    </IntroVideoContainer>
  );
}

export default IntroVideo;