import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

const ProductDetial = () => {
  useEffect(() => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Productcard></Productcard>;
};

const Productcard = styled.div`
  height: 400px;
  width: 400px;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-decoration: none;
  border: 4px solid rgb(113, 183, 230);
  margin: 20px 20px;
  box-shadow: 10px 10px 5px lightblue;
  background-size: cover;
  overflow: auto;
`;

export default ProductDetial;
