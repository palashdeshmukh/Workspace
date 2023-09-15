import React from 'react';
import pcimg from '../Assets/images/mainpc.png'
import styled from 'styled-components';

const InfoContainerBox =styled.div`
display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  @media (max-width: 1268px) {
    flex-wrap: wrap;
  }
`

function InfoContainer() {
  return (
    <div className='w-100 mt-4 mb-4'>
      <InfoContainerBox className='p-3 '>
      <div className='fs-5 w-100'>
          <p className='fs-5 lh-lm fst-italic text-left w-100'>
            <strong>Discover "Workspace" - Your Gateway to a Productive Work Environment</strong>&nbsp;
            Are you tired of the distractions and challenges of working or studying from home during these unprecedented times? We understand the struggle faced by IT industry employees and students alike. Maintaining a productive and focused work environment at home can be a daunting task, especially when it's so different from the structured setting of the office or classroom.

            That's why we've created "Workspace," a game-changing platform designed to transform your remote work or study experience. Here's why you should choose "Workspace":

            <div className="pl-4">
              <p>
                Recreate the Office Environment: We know that responsibility, attentiveness, and concentration are essential for success. "Workspace" recreates the office atmosphere, allowing you to tap into your highest potential, whether you're an employee striving for productivity or a student seeking focus.
              </p>
              <p>
                Essential Office Facilities: Our platform provides all the essential office facilities you need to work or study with maximum efficiency. From comfortable workstations to high-speed internet access, we've got you covered.
              </p>
              <p>
                Multiple Locations Across India: "Workspace" is not confined to a single location. We're proud to offer our services across various cities in India.
              </p>
            </div>
          </p>
        </div>
        <div className='border border-white rounded w-100 h-100'>
          <img
            src={pcimg}
            alt='WSI'
            width='100%'
            height='auto'
          />
        </div>
      </InfoContainerBox>
    </div>
  );
}

export default InfoContainer;