import React from 'react'
import styled from 'styled-components'

export default function OrderDetails({ myItems }) {

  function totalAPagar() {
    let list = []
    var product = 0;
    var shipping = 0;
    var taxes = 0;
    var total = 0;

    for (let i = 0; i < myItems.length; i++) {
      product = product + myItems[i].prod_quantity * myItems[i].prod_price;
      taxes = taxes + myItems[i].prod_quantity * myItems[i].prod_price * 18 / 100;
      shipping = shipping + myItems[i].prod_quantity * myItems[i].prod_price / 10;
    }

    total = product + taxes + shipping;
    if (total === 0) {
      list.push("0.00", "0.00", "0.00", "0.00");
    }

    list.push(+product.toFixed(2), +taxes.toFixed(2), +shipping.toFixed(2), +total.toFixed(2))
    return list
  }

  return (
    <OrderDetailsStyle>
      <WrapperProducts>
        <H5>Products</H5>
        <H5>${totalAPagar()[0]}</H5>
      </WrapperProducts>
      <WrapperShippingCost>
        <ShippingCost>ShippingCost</ShippingCost>
        <H5>${totalAPagar()[1]}</H5>
      </WrapperShippingCost>
      <WrapperTaxes>
        <H5>Taxes</H5>
        <H5>${totalAPagar()[2]}</H5>
      </WrapperTaxes>
      <WrapperTotal>
        <Total>Total</Total>
        <TotalNumber>${totalAPagar()[3]}</TotalNumber>
      </WrapperTotal>
    </OrderDetailsStyle>
  )
}

const OrderDetailsStyle = styled.div`
background: #FFFFFF;
width:360px;
heigth:160px;
margin:16px 0px;
`;

const WrapperProducts = styled.div`
display:flex;
justify-content:space-between;
margin:16px 16px 8px 16px ;
`;

const WrapperShippingCost = styled.div`
background-color:#FFE200;
display:flex;
justify-content:space-between;
margin:8px 16px;
`;

const WrapperTaxes = styled.div`
display:flex;
justify-content:space-between;
margin:8px 16px;
`;

const WrapperTotal = styled.div`
display:flex;
justify-content:space-between;
margin:16px 16px;
`;

const H5 = styled.h5`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
`;

const Total = styled(H5)`
font-weight: 600;
color:#333333;
`;

const TotalNumber = styled(H5)`
font-weight: 600;
color:#FF2D55;
`;

const ShippingCost = styled(H5)`
font-weight: 600;
color:#333333;
`;

