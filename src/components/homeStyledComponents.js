import styled from "@emotion/styled/macro";
import pokeball from "../images/pokeball.png";
import "../App.css";
// import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
`;

export const Header = styled.div`
  padding: 60px;
  text-align: left;
  background-color: #ffcb05;
  color: white;
  display: block;
  font-size: 30px;
  height: 250px;
`;

export const Footer = styled.div`
  margin-bottom: 0px;
  padding: 60px;
  text-align: center;
  height: 250px;
  background-color: #ffcb05;
  color: white;
  font-size: 30px;
`;

export const Card = styled.div`
margin: 20px;
border: 2px solid #fff;
background-color: #ffcb05;
height: 80%;
width: 50%;
border-radius: 20px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
display: flex;
flex-flow: column;
align-items: center;
flex: 1,
width: null,
height: null,
resizeMode: 'contain'
`;

export const CardContainer = styled.div`
  background-color: #003a70;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  text-align: left;
  color: #003a70;
  position: relative;
  font-size: 100px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  color: #003a70;
  font-size: 21px;
`;

export const CardHeading1 = styled.h1`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  color: #003a70;
  font-size: 18px;
`;

export const CardHeading2 = styled.h1`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  color: #003a70;
  font-size: 16px;
`;

export const ImgContainer = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ffcb05;
`;
