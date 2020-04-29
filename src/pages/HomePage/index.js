import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Shop from "./Shop";
import Teachers from "./Teachers";
import Button from "../../components/Button";
import {
  Header,
  SmallText,
  SmallTextWide,
  SmallHeader,
} from "../../components/Typography";
import background from "../../pics/background-single-2.jpg";
import story from "../../pics/girl-surf-2.jpg";
import yogaclass from "../../pics/beach-yoga-final.jpg";
import surfclass from "../../pics/bali.webp";
import olive from "../../pics/olive.png";

function App() {
  return (
    <AppBody>
      <Intro>
        <Header> SURF SHOP & SCHOOL</Header>
        <SmallText>Your soulmates in Sri Lanka</SmallText>
        <Button>EXPLORE</Button>
      </Intro>

      <Shop />

      <Otbivka />

      <SurfSchool>
        <SurfSchoolInfo>
          <SmallHeader teal={true}>Surfing school</SmallHeader>
          <SmallTextWide teal={true}>
            Nunc sed augue lacus viverra vitae congue eu consequat ac. Sapien
            eget mi proin sed libero. Enim praesent elementum facilisis leo vel.
            A cras semper auctor neque vitae tempus quam. Felis donec et odio
            pellentesque diam volutpat commodo. Dictum sit amet justo donec enim
            diam. Facilisis leo vel fringilla est ullamcorper.
          </SmallTextWide>
          <Button>Learn more</Button>
        </SurfSchoolInfo>
        <SurfSchoolImg src={surfclass} />
      </SurfSchool>

      <HalfSticky>
        <SmallHeader teal={true}>Yoga Lessons</SmallHeader>
        <SmallTextWide teal={true}>
          Nunc sed augue lacus viverra vitae congue eu consequat ac. Sapien eget
          mi proin sed libero. Enim praesent elementum facilisis leo vel. A cras
          semper auctor neque vitae tempus quam. Felis donec et odio
          pellentesque diam volutpat commodo. Dictum sit amet justo donec enim
          diam. Facilisis leo vel fringilla est ullamcorper.
        </SmallTextWide>
        <Button>Learn more</Button>
      </HalfSticky>

      <OurStory>
        <SmallHeader teal={true}>Our story</SmallHeader>
        <SmallTextWide teal={true}>
          Nunc sed augue lacus viverra vitae congue eu consequat ac. Sapien eget
          mi proin sed libero. Enim praesent elementum facilisis leo vel. A cras
          semper auctor neque vitae tempus quam. Felis donec et odio
          pellentesque diam volutpat commodo. Dictum sit amet justo donec enim
          diam. Facilisis leo vel fringilla est ullamcorper. Sollicitudin
          aliquam ultrices sagittis orci a scelerisque purus semper. Dapibus
          ultrices in iaculis nunc sed augue lacus viverra.
        </SmallTextWide>
      </OurStory>

      <Teachers />
      <Otbivka2 />
      <Footer />
    </AppBody>
  );
}

const AppBody = styled.div`
  text-align: center;
`;

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

const OurStory = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("${story}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
`;

const HalfSticky = styled.div`
  height: 50vh;
  background-image: url("${yogaclass}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50%;
`;

const Otbivka = styled.div`
  height: 10vh;
  background-color: white;
  background-image: url("${olive}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Otbivka2 = styled.div`
  height: 50vh;
`;

const SurfSchool = styled.div`
  height: 50vh;
  width: 100%;
  padding-top: 50px;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SurfSchoolInfo = styled.div`
  width: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SurfSchoolImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

export default App;
