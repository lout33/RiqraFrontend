import React from 'react'
import styled from 'styled-components'

export default function DeliveryDate() {

  function showDay() {
    let date
    switch (new Date().getDay()) {
      case 0:
        // day = "Sunday";
        date = new Date()
        date.setDate(date.getDate() + 1)
        date.getDate();
        return (
          <Span>{date.toLocaleDateString()}</Span>
        )
      case 1:
        // day = "Monday";
        date = new Date()
        date.setDate(date.getDate() + 1)
        date.getDate();
        return (
          <Span>{date.toLocaleDateString()}</Span>
        )
      case 2:
        // day = "Tuesday";
        date = new Date()
        date.setDate(date.getDate() + 1)
        date.getDate();
        return (
          <Span>{date.toLocaleDateString()}</Span>
        )
      case 3:
        // day = "Wednesday";
        date = new Date()
        date.setDate(date.getDate() + 1)
        date.getDate();
        return (
          <Span>{date.toLocaleDateString()}</Span>
        )
      case 4:
        // day = "Thursday";
        date = new Date()
        date.setDate(date.getDate() + 1)
        date.getDate();
        return (
          <Span>{date.toLocaleDateString()}</Span>
        )
      case 5:
        // day = "Friday";
        date = new Date()
        date.setDate(date.getDate() + 3)
        date.getDate();

        return (
          <Span>{date.toLocaleDateString()}</Span>
        )
      case 6:
        // day = "Saturday";
        date = new Date()
        date.getDate()
        date.setDate(date.getDate() + 2)
        date.getDate();
        return (
          <Span>{date.toLocaleDateString()}</Span>
        )
      default:
        return (
          <div>Ups, Some problems</div>
        )
    }
  }
  return (
    <DeliveryDateStyle>
      <Img src={require('./../assets/truck.svg')} alt="" />
      <H5>Buy now and get it by {showDay()} </H5>
    </DeliveryDateStyle>
  )
}

const DeliveryDateStyle = styled.div`
width: 300px;
height: 24px;
display:flex;
margin-top: 128px;
`;

const Img = styled.img`
width:17.58px;
heigth:20px;
margin-right:12px
`;

const H5 = styled.h5`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
width: 300px;
`;

const Span = styled.span`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color:#333333;
`;
