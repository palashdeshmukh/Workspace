import React from 'react'
import styled from 'styled-components'

const ProductDetailContainer=styled.div`
display:flex;
flex-direction:column;
gap:20px;
`
const ProductContainer=styled.div`
`
const ProductHeading1=styled.h2`

`
const ProductHeading2=styled.h3`

`
const ProductConnectIcon=styled.div`
padding:30px
`

function ProductDetail () {
  return (
    <>
    <ProductDetailContainer className='border border-1 w-25 p-4'>
      <ProductContainer className='border border-2 border-black'>
        <ProductHeading1 className='border border-1' >Heading 1</ProductHeading1>
        <ProductHeading2>Heading 2</ProductHeading2>
        <ProductHeading2>Heading 3</ProductHeading2>
        <ProductConnectIcon className='border border-2 border-black'></ProductConnectIcon>

      </ProductContainer>
      <ProductContainer  className='border border-2 border-black'>
      <ProductHeading1 className='border border-2' >Heading 1</ProductHeading1>
        <ProductHeading2>Heading 2</ProductHeading2>
        <ProductHeading2>Heading 3</ProductHeading2>
        <ProductConnectIcon className='border border-2 border-black'></ProductConnectIcon>
        <ProductConnectIcon className='border border-2 border-black'></ProductConnectIcon>

      </ProductContainer>
    </ProductDetailContainer>
    </>
  )
}

export default ProductDetail