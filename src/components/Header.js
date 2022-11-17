import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderBar>
        <ProductLogo>SMART PHONE</ProductLogo>
        <Productul>
          <Productli>로그인</Productli>
          <Productli>회원가입</Productli>
          <Productli>리뷰보러가기</Productli>
        </Productul>
      </HeaderBar>
    </div>
  );
};

const HeaderBar = styled.div`
  background: skyblue;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductLogo = styled.h1`
  color: white;
`;

const Productul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Productli = styled.li`
  display: inline-block;
  margin-left: 16px;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export default Header;
