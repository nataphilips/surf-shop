import React from "react";
import background from "./pics/background-single-2.jpg";
import story from "./pics/girl-surf-2.jpg";
import bodyboard from "./pics/man-bodyboard.jpg";
import surfing from "./pics/surfboards-2.jpg";
import yoga from "./pics/girl-yoga.jpg";
import yogaclass from "./pics/beach-yoga-final.jpg";
import surfclass from "./pics/bali.webp";
import olive from "./pics/olive.png";
import wave from "./pics/surfers.jpg";
import liza from "./pics/girl-surf.jpg";
import layla from "./pics/girl-yoga-2.jpg";
import "./App.css";
import styled from "styled-components";

function App() {
  // const [isVisible, setVisible] = React.useState(false);
  // const domRef = React.useRef();
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   // observer.observe(domRef.current);
  // }, []);

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
      <Shop>
        <SmallHeader teal={true}>Our teachers</SmallHeader>
        <SmallText teal={true}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </SmallText>
        <ShopContainer>
          <ShopCard>
            <ShopPic src={liza}></ShopPic>
            <TinyHeader teal={true}>Liza</TinyHeader>
            <SmallTextWide teal={true}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </SmallTextWide>
          </ShopCard>
          <ShopCard>
            <ShopPic src={bodyboard}></ShopPic>
            <TinyHeader teal={true}>Peter</TinyHeader>
            <SmallTextWide teal={true}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </SmallTextWide>
          </ShopCard>
          <ShopCard>
            <ShopPic src={layla}></ShopPic>
            <TinyHeader teal={true}>Layla</TinyHeader>
            <SmallTextWide teal={true}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </SmallTextWide>
          </ShopCard>
        </ShopContainer>
        <Button>More</Button>
      </Shop>
      <Otbivka />
      <Footer>
        <FooterImg />
        <Contact>
          <SmallHeader teal={true}>Contact</SmallHeader>
        </Contact>
      </Footer>
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
  text-transform: uppercase;
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
  background-image: url("${olive}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* background-attachment: fixed; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const Otbivka2 = styled.div`
  height: 50vh;
  background-color: white;
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

const SurfSchool = styled.div`
  height: 50vh;
  width: 100%;
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

const Footer = styled.div`
  height: 50vh;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
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

// const FadeInText = styled.div`
//   opacity: 0;
//   transform: translateY(20vh);
//   visibility: hidden;
//   transition: opacity 0.6s ease-out, transform 1.2s ease-out;
//   will-change: opacity, visibility;
//   ${props =>
//     props.isvisible &&
//     `
//     opacity: 1;
//   transform: none;
//   visibility: visible;
//   `}
// `;

export default App;
