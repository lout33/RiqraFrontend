import React from 'react'
import styled from 'styled-components'

export default function HandleInput({ setInputValue, inputValue, products, setProducts, myItems, setMyItems }) {
  let finded = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].prod_name.toLowerCase().includes(inputValue.toLowerCase()) && inputValue !== '') {
      finded.push(products[i]);
    }
  }

  function handleClick(item) {
    item['prod_quantity'] = 1;
    setMyItems([...myItems, item]);
    let newproducts = products.filter(product => {
      return product.prod_id !== item.prod_id;
    })
    setProducts([...newproducts])
    setInputValue('');
  }

  return (
    <ProductOptions >
      {finded.map((item, index) => {
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
            <div>
              <Button onClick={() => handleClick(item)}>
                <ImgPlus src={require('./../../assets/plus.svg')} alt="" />
              </Button>
            </div>
          </Option>
        )
      })}
    </ProductOptions>
  )
}

const ProductOptions = styled.div`
background: #FFFFFF;
width: 360px;
height: 480px;
display:flex;
flex-direction:column;
align-items:flex-start;
border-radius: 4px;
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
width: 220px;
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

const Button = styled.button`
border-radius:50%;
width:48px;
height:48px;
background: #FF8000;
cursor:pointer;
`;

const ImgPlus = styled.img`
width:24px;
height:24px;
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

