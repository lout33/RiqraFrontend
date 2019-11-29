import React from 'react'
import styled from 'styled-components'

export default function ShowMyItems({ products, setProducts, myItems, setMyItems }) {

  return (
    <ProductsPicked>{
      myItems.map((item, index) => {
        return (
          <Option key={index}>
            <Product>
              <div>
                <ProductImg src={item.img} alt="" />
              </div>
              <ProductDetails>
                <H5>{item.prod_name}</H5>
                <Price>${item.prod_price}.00</Price>
              </ProductDetails>
            </Product>
            <WrapperButtons >
              <WrapperQuantityButtons >
                <ButtonMore onClick={() => {
                  item['prod_quantity'] = item.prod_quantity - 1
                  if (item['prod_quantity'] === 0) {
                    myItems.splice(index, 1);
                    //adding to products the items removed
                    setProducts([...products, item])
                  }
                  setMyItems([...myItems])
                }}><ImgMenus src={require('./../../assets/minus.svg')} alt="" />
                </ButtonMore>
                <WrapperCounter>
                  <Counter>{item.prod_quantity}</Counter>
                </WrapperCounter>
                <ButtonLess onClick={() => {
                  item['prod_quantity'] = item.prod_quantity + 1
                  setMyItems([...myItems]);
                }}><ImgPlus src={require('./../../assets/plus.svg')} alt="" />
                </ButtonLess>
              </WrapperQuantityButtons>
              <ButtonDelete onClick={() => {
                console.log(index)
                myItems.splice(index, 1);
                setMyItems([...myItems])
                //adding to products the items removed
                setProducts([...products, item])
              }}>
                <Delete>delete</Delete>
              </ButtonDelete>
            </WrapperButtons>
          </Option >
        )
      })
    }
    </ProductsPicked>
  )
}

const ProductsPicked = styled.div`
background: #FFFFFF;
width: 360px;
height: 480px;
display:flex;
flex-direction:column;
align-items:flex-start;
border-radius: 4px;
`;

const WrapperButtons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const WrapperQuantityButtons = styled.div`
background: #FF8000;
display:flex;
justify-content:space-around ;
width: 180px;
height: 48px;
`;

const ButtonLess = styled.button`
border-radius:100%;
cursor:pointer;
`;

const ImgMenus = styled.img`
width:16px;
height:16px;
`;

const ImgPlus = styled.img`
width:16px;
height:16px;
`;

const ButtonMore = styled.button`
border-radius:100%;
cursor:pointer;
`;

const WrapperCounter = styled.div`
width:68px;
height:48px;
display:flex;
justify-content:center;
align-items:center;
`;

const Counter = styled.h5`
color:white;
font-size:16px;
`;

const ButtonDelete = styled.button`
cursor:pointer;
`;

const Delete = styled.h5`
color:black;
font-size:12px
`;

const ProductDetails = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly
`;

const Option = styled.div`
width: 360px;
display:flex;
justify-content:space-around;
align-items:center;
border-bottom:1px solid #DDDDDD;
`;

const Product = styled.div`
width: 190px;
display:flex;
justify-content:flex-start;
`;

const ProductImg = styled.img`
width:80px;
heigth:74px;
`;

const Price = styled.h4`
background: #FFFFFF;
/* h4/semibold */
font-style: normal;
font-weight: 600;
font-size: 21px;
line-height: 32px;
color: #333333;
margin: 16px 0px 8px 0px;
color:red;
margin: 0px;
line-height:21px;
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

