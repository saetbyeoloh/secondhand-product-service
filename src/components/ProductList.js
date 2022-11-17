import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data?.products.map((product) => {
        return (
          <Productcard>
            <Productinner>
              <Productthumbnail>
                <img alt="phone" src={product.thumbnail} />
              </Productthumbnail>
              <ProductTitle>{product.title}</ProductTitle>
              <Productprice>${product.price}</Productprice>
            </Productinner>
          </Productcard>
        );
      })}
    </div>
  );
};

const Productcard = styled.div`
  height: 400px;
  width: 400px;
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
  overflow: auto;

  @include media {
    height: 500px;
  }
`;

const Productthumbnail = styled.div`
  border-radius: 100%;
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
