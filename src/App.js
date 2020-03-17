import React from "react";
import background from "./pics/background-single-2.jpg";
import sand from "./pics/beach-sand.jpg";
import bodyboard from "./pics/man-bodyboard.jpg";
import surfing from "./pics/surfboards-2.jpg";
import yoga from "./pics/girl-yoga.jpg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Intro>
        <Header> SURF SHOP & SCHOOL</Header>
        <SmallText>Your soulmates in Sri Lanka</SmallText>
        <Button>EXPLORE</Button>
      </Intro>
      <Shop>
        <SmallHeader teal={true}>
          We sell the best surfing gear <br /> since 1994
        </SmallHeader>
        <SmallText teal={true}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
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
      </Shop>
    </div>
  );
}

const Intro = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  margin: 10px;
  color: white;
  font-size: 42px;
`;

const SmallText = styled.div`
  margin: 0px;
  color: ${props => (props.teal ? "teal" : "white")};
  font-size: 18px;
  margin: 10px;
  max-width: 30%;
`;

const SmallTextWide = styled.div`
  margin: 0px;
  color: ${props => (props.teal ? "teal" : "white")};
  font-size: 18px;
  margin: 10px;
  max-width: 70%;
`;

const Button = styled.button`
  background-color: grey;
  color: white;
  border: none;
  padding: 15px;
  font-size: 16px;
  margin: 10px;
`;

const Shop = styled.div`
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

const SmallHeader = styled.h3`
  margin: 10px;
  color: ${props => (props.teal ? "teal" : "white")};
  font-size: 28px;
  text-transform: uppercase;
  max-width: 30%;
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

const TinyHeader = styled.h3`
  margin: 10px;
  color: ${props => (props.teal ? "teal" : "white")};
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px;
`;

const ShopPic = styled.img`
  height: 250px;
  width: 80%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

export default App;
