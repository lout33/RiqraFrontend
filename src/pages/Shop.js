import React, { useState, useEffect } from 'react'
import Search from './../components/Search';
import ProductList from './../components/ProductList';
import DeliveryDate from './../components/DeliveryDate';
import OrderDetails from './../components/OrderDetails';
import SendOrder from './../components/SendOrder';
import styled from 'styled-components'

export default function Shop({ orderCodigo, setOrderCodigo }) {

  const [inputValue, setInputValue] = useState('')
  const [products, setProducts] = useState([])
  const [myItems, setMyItems] = useState([])

  useEffect(() => {
    fetch('https://riqrachallege.herokuapp.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: "{products{ prod_id prod_name prod_price} }" })
    })
      .then(response => response.json())
      .then(data => {
        data.data.products[0]['img'] = 'https://wongfood.vteximg.com.br/arquivos/ids/157542-200-200/Yogurt-Bio-Laive-Natural-Botella-946-ml-48256005.jpg'
        data.data.products[1]['img'] = 'https://res.cloudinary.com/riqra/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1569363623/sagatrans/catalog/dax23bqdqo3rgf7n9d2y.webp'
        data.data.products[2]['img'] = 'https://wongfood.vteximg.com.br/arquivos/ids/158589-300-300/Gaseosa-Fanta-Botella-3-L-62288.jpg'
        setProducts(data.data.products)
      });
  }, []);

  return (
    <WrapperShop>
      <WrapperSearchProductList>
        <Search inputValue={inputValue} setInputValue={setInputValue}></Search>
        <ProductList inputValue={inputValue} setInputValue={setInputValue} products={products} setProducts={setProducts} myItems={myItems} setMyItems={setMyItems}></ProductList>
      </WrapperSearchProductList>
      <WrapperOrder>
        <DeliveryDate></DeliveryDate>
        <OrderDetails myItems={myItems} setMyItems={setMyItems}></OrderDetails>
        <SendOrder myItems={myItems} setMyItems={setMyItems} orderCodigo={orderCodigo} setOrderCodigo={setOrderCodigo}></SendOrder>
      </WrapperOrder>
    </WrapperShop>
  );
}


const WrapperShop = styled.section`
height:100%;
display:flex
position: relative;
background: #F7F7F9;
flex-wrap:wrap;
justify-content:  space-evenly;
`;

const WrapperSearchProductList = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background: #F7F7F9;
min-width:360px;
margin-top:64px
`;

const WrapperOrder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: flex-start ;
background: #F7F7F9;
min-width:360px;
`;
