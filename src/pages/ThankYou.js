import React from 'react'
import styled from 'styled-components'
import { withRouter } from "react-router";

const ThankYou = (props) => {
  function goToShopping() {
    props.history.push("/");
  }

  return (
    <ThankYouStyle>
      <H1>Thank you </H1>
      <Registered>Your order <Span>{props.orderCodigo}</Span>  has been registered </Registered>
      <Continue onClick={() => goToShopping()}>Continue shopping</Continue>
      <Img src={require('./../assets/success.svg')} alt="" width="200px" />
    </ThankYouStyle>
  )
}
export default withRouter(ThankYou);


const ThankYouStyle = styled.div`
display:flex
flex-direction:column;
align-items:center;
position: relative;
background: #F7F7F9;
height:100%;
// border:solid 1px red;
`;

const H1 = styled.h1`
font-family: Open Sans;
font-style: normal;
font-size: 28px;
line-height: 42px;
margin-top:64px
font-weight: 600;
color: #333333;
`;

const H5 = styled.h5`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
`;

const Registered = styled(H5)`
margin: 16px 0px ;
`;

const Continue = styled.button`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #0500FF;
cursor:pointer;
`;

const Img = styled.img`
width:308px;
heigth:288px;
margin-top: 48px ;
`;

const Span = styled.span`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
`;

