import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const TypingContainer = styled.div`
  font-family: sans-serif;
  font-weight: 800;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  font-size:75px;


  @media (max-width: 768px) {
    font-size: 40px; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 30px; /* Adjust font size for even smaller screens */
  }
`;

function TypingHeading() {
  return (
    <TypingContainer>
      <Typewriter
        options={{
          strings: ["Transforming Work, Uplifting Lives: Welcome to Workspace!"],
          autoStart: true,
          loop: true,
          typeSpeed: 10, // Adjust typing speed (default is 50)
          deleteSpeed: 250, // Adjust delete speed (default is 25)
        }}
      />
    </TypingContainer>
  );
}

export default TypingHeading;
