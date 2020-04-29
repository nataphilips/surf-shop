import React from "react";
import styled from "styled-components";

import Button from "../../components/Button";
import {
  SmallText,
  SmallTextWide,
  SmallHeader,
  TinyHeader,
} from "../../components/Typography";
import bodyboard from "../../pics/man-bodyboard.jpg";
import surfing from "../../pics/surfboards-2.jpg";
import yoga from "../../pics/girl-yoga.jpg";

function Shop() {
  return (
    <ShopBody>
      <SmallHeader teal={true}>
        We sell the best surfing gear <br /> since 1994
      </SmallHeader>
      <SmallText teal={true}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </SmallText>
      <ShopContainer>
        <ShopCard>
          <ShopPic src={surfing}></ShopPic>
          <TinyHeader teal={true}>Surfing</TinyHeader>
          <SmallTextWide teal={true}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </SmallTextWide>
        </ShopCard>
        <ShopCard>
          <ShopPic src={bodyboard}></ShopPic>
          <TinyHeader teal={true}>Bodyboarding</TinyHeader>
          <SmallTextWide teal={true}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </SmallTextWide>
        </ShopCard>
        <ShopCard>
          <ShopPic src={yoga}></ShopPic>
          <TinyHeader teal={true}>Yoga</TinyHeader>
          <SmallTextWide teal={true}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </SmallTextWide>
        </ShopCard>
      </ShopContainer>
      <Button>SHOP NOW</Button>
    </ShopBody>
  );
}

const ShopBody = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 20px;
  margin-top: 50px;
`;

const ShopCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 20px;
`;

const ShopPic = styled.img`
  height: 250px;
  width: 80%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

export default Shop;
