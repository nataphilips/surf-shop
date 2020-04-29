import styled from "styled-components";

const Header = styled.h1`
  margin: 10px;
  color: white;
  font-size: 42px;
  font-family: "Oswald", sans-serif;
`;

const SmallText = styled.div`
  margin: 0px;
  color: ${(props) => (props.teal ? "#3B7C78" : "white")};
  font-size: 18px;
  margin: 10px;
  max-width: 30%;
`;

const SmallTextWide = styled.div`
  margin: 0px;
  color: ${(props) => (props.teal ? "#3B7C78" : "white")};
  font-size: 18px;
  margin: 10px;
  max-width: 70%;
`;

const SmallHeader = styled.h3`
  margin: 10px;
  color: ${(props) => (props.teal ? "#3B7C78" : "white")};
  font-size: 28px;
  text-transform: uppercase;
  max-width: 30%;
  font-family: "Oswald", sans-serif;
`;

const TinyHeader = styled.h3`
  margin: 10px;
  color: ${(props) => (props.teal ? "#3B7C78" : "white")};
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px;
`;

export { Header, SmallText, SmallTextWide, SmallHeader, TinyHeader };
