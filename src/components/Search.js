import React from 'react'
import styled from 'styled-components'

export default function Search({ setInputValue, inputValue }) {

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <SearchStyle value={inputValue} onChange={handleChange} placeholder='Search Products' type="text"></SearchStyle>
  )
}

const SearchStyle = styled.input`
  background: #FFFFFF;
  border:solid 1px red;
  width: 360px;
  height:48px;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 4px;
  padding:0px 16px ;
  margin-bottom:16px;
  /* h5Regular */
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* black */
  color: #333333;
  `;
