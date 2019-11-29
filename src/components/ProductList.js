import React, { Fragment } from 'react'
import styled from 'styled-components'
import HandleInput from './ProductListComponents/HandleInput'
import ShowMyItems from './ProductListComponents/ShowMyItems';

export default function ProductList({ setInputValue, inputValue, products, setProducts, myItems, setMyItems }) {

  function noHayItems() {
    return (
      <EmptyCard>
        <Img src={require('./../assets/car.svg')} alt="" />
        <H4>Your cart is empty</H4>
        <H5>Seems like you haven’t chosen <br />what to buy... </H5>
      </EmptyCard>)
  }

  return (
    <Fragment>
      {(() => {
        if (inputValue === '') {
          if (myItems[0] === undefined) {
            return noHayItems()
          } else {
            return (<ShowMyItems inputValue={inputValue} setInputValue={setInputValue} products={products} setProducts={setProducts} myItems={myItems} setMyItems={setMyItems}></ShowMyItems>)
          }
        } else {
          console.log("esta buscando las opciones de usuario");
          return (
            <HandleInput inputValue={inputValue} setInputValue={setInputValue} products={products} setProducts={setProducts} myItems={myItems} setMyItems={setMyItems}></HandleInput>
          )
        }
      })()}
    </Fragment>

  )
}

const EmptyCard = styled.div`
background: #FFFFFF;
width: 360px;
height: 480px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius: 4px;
`;

const Img = styled.img`
background: #FFFFFF;
width:53.33px;
heigth:45px;
`;

const H4 = styled.h4`
background: #FFFFFF;
/* h4/semibold */
font-style: normal;
font-weight: 600;
font-size: 21px;
line-height: 32px;
color: #333333;
margin: 16px 0px 8px 0px;
`;

const H5 = styled.h5`
background: #FFFFFF;
/* h5Regular */
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
`;


