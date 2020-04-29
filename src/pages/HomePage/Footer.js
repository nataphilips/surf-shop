import React from "react";
import styled from "styled-components";
import {
  SmallText,
  SmallHeader,
  TinyHeader,
} from "../../components/Typography";

import wave from "../../pics/surfers.jpg";

function Footer() {
  return (
    <FooterContainer>
      <FooterImg />
      <Contact>
        <SmallHeader teal={true}>Contact</SmallHeader>
        <TinyHeader teal={true}>Phone</TinyHeader>
        <SmallText teal={true}>+0 111 222 33 44</SmallText>
        <TinyHeader teal={true}>Email</TinyHeader>
        <SmallText teal={true}>surfschool@example.com</SmallText>
        <TinyHeader teal={true}>Address</TinyHeader>
        <SmallText teal={true}>0002233, Sri Lanka, Midigama</SmallText>
      </Contact>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 50vh;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  position: fixed;
  z-index: -1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Contact = styled.div`
  width: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterImg = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("${wave}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export default Footer;
