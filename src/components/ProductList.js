import React from "react";
import styled from "styled-components";

const ProductList = () => {
  return (
    <div>
      <Productcard>
        <Productinner>
          <ProductTitle></ProductTitle>
          <Productprice></Productprice>
        </Productinner>
      </Productcard>
    </div>
  );
};

const Productcard = styled.div`
  height: 400px;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  border: 4px solid rgb(113, 183, 230);
  margin: 20px 20px;
  box-shadow: 10px 10px 5px lightblue;
  background-size: cover;

  @include media {
    height: 500px;
  }
`;

const Productinner = styled.div`
height: 50%;
dispaly: flex;
flex-direction: column;
fustify-content: center;
align-items: center;
background: white:
box-sizing: border-box;
padding: 40px;

@include media {
    width: 50%;
    height: 100%;
}
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  color: black;
  text-align: center;
  font-weight: 700;
  text-shadow: 0px 2px 2px #a6f8d5;
  position: relative;
  margin: 0 0 20px 0;
  @include media {
    font-size: 30px;
  }
`;

const Productprice = styled.div`
  color: rgb(15, 101, 155);
  text-align: center;
`;

export default ProductList;
