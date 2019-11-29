import React from 'react'
import styled from 'styled-components'
import { withRouter } from "react-router";

const SendOrder = (props) => {
  function sendData() {
    console.log(props.myItems);
    for (let i = 0; i < props.myItems.length; i++) {
      var order_quantity = props.myItems[i].prod_quantity
      var producto_id = props.myItems[i].prod_id
      fetch('https://riqrachallege.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: "mutation createOrder($order_quantity: Int!, $producto_id: Int!) {createOrder(order_quantity: $order_quantity, producto_id: $producto_id){order_quantity producto_id order_id}}",
          variables: { order_quantity, producto_id }
        })
      })
        .then(r => r.json())
        .then(data => {
          let orderId = String(data.data.createOrder.order_id);
          let orderIdWithCeros = orderId.padStart(4, '0')
          let codigo = "P" + orderIdWithCeros;
          props.setOrderCodigo(codigo);
          console.log(props.orderCodigo)
        });


    }
    props.history.push("/salir");
  }

  function totalAPagar() {
    let list = []
    var product = 0;
    var shipping = 0
    var taxes = 0
    var total = 0;

    for (let i = 0; i < props.myItems.length; i++) {
      product = product + props.myItems[i].prod_quantity * props.myItems[i].prod_price;
      taxes = taxes + props.myItems[i].prod_quantity * props.myItems[i].prod_price * 18 / 100;
      shipping = shipping + props.myItems[i].prod_quantity * props.myItems[i].prod_price / 10;
    }
    total = product + taxes + shipping;
    list.push(product, taxes, shipping, total)
    return list
  }

  return (
    <div>
      {console.log(props.myItems)}
      {totalAPagar()[3] >= 50 ?
        // <button onClick={() => sendData()}> <Link to="/salir">Send Order</Link></button>
        <ButtonAbled onClick={() => sendData()}><H5Abled>COMPLETE ORDER</H5Abled></ButtonAbled>
        :
        <Button disabled={true}>
          <H5>COMPLETE ORDER</H5>
        </Button>}

    </div>


  )
}
export default withRouter(SendOrder);

const Button = styled.button`
background: #F7F7F7;
border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 4px;
width: 360px;
height:48px;
width: 360px;
`;

const ButtonAbled = styled(Button)`
background: #FF8000;
border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 4px;
width: 360px;
height:48px;
width: 360px;
cursor:pointer;
`;

const H5 = styled.h5`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #C1C1C1;
`;

const H5Abled = styled(H5)`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`;