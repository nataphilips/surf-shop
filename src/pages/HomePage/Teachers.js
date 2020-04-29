import React from "react";
import styled from "styled-components";

import {
  SmallText,
  SmallTextWide,
  SmallHeader,
  TinyHeader,
} from "../../components/Typography";
import Button from "../../components/Button";

import bodyboard from "../../pics/man-bodyboard.jpg";
import liza from "../../pics/girl-surf.jpg";
import layla from "../../pics/girl-yoga-2.jpg";

function Teachers() {
  return (
    <TeachersContainer>
      <SmallHeader teal={true}>Our teachers</SmallHeader>
      <SmallText teal={true}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </SmallText>
      <TeacherContainer>
        <TeacherCard>
          <TeacherPic src={liza}></TeacherPic>
          <TinyHeader teal={true}>Liza</TinyHeader>
          <SmallTextWide teal={true}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </SmallTextWide>
        </TeacherCard>
        <TeacherCard>
          <TeacherPic src={bodyboard}></TeacherPic>
          <TinyHeader teal={true}>Peter</TinyHeader>
          <SmallTextWide teal={true}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </SmallTextWide>
        </TeacherCard>
        <TeacherCard>
          <TeacherPic src={layla}></TeacherPic>
          <TinyHeader teal={true}>Layla</TinyHeader>
          <SmallTextWide teal={true}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </SmallTextWide>
        </TeacherCard>
      </TeacherContainer>
      <Button>More</Button>
    </TeachersContainer>
  );
}

const TeachersContainer = styled.div`
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

const TeacherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 20px;
  margin-top: 50px;
`;

const TeacherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 20px;
`;

const TeacherPic = styled.img`
  height: 250px;
  width: 80%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

export default Teachers;
