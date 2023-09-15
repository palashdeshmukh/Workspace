import React from 'react';
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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eos a natus? Ea alias corporis,
            molestias sunt exercitationem quas accusamus voluptas odit unde at nam, totam optio aliquam, commodi et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem rem quasi ipsa! Nesciunt fuga nihil
            molestiae labore! Quis ullam porro aliquid ex harum distinctio provident, iusto assumenda ipsa odit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Alias harum, necessitatibus recusandae doloremque
            dignissimos velit maiores excepturi id aspernatur porro similique rerum eum autem libero. Harum ullam
            officia aspernatur quo?
          </p>
        </div>
        <div className='border border-white rounded w-100'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSkxPShR7EfHhYSmkuv3IyxM92Y3IjeNy3Q&usqp=CAU'
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