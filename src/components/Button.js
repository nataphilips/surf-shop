import styled from "styled-components";

const Button = styled.button`
  background-color: #a9aca9;
  color: white;
  border: none;
  padding: 15px;
  font-size: 20px;
  margin: 10px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  border-radius: 5px;

  &: hover {
    box-shadow: 0px 0px 10px 3px #70798c;
    transition: ease-out 0.2s;
  }
`;

export default Button;
