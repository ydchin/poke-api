import styled from "@emotion/styled/macro";
import pokeball from "../images/pokeball.png";
import "../App.css";

export const Input = styled.input`
  border: 1px solid #ababab;
  padding: 5px;
  font-size: 18px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  width: 225px;
  text-align: center;
`;

export const LinkStyle = styled.a`
  color: #003a70;

  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

export const Paragraph = styled.p`
  display: inline-block;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New";
`;
export const Button = styled.button`
  background-color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  color: #0883eb;
  border: 2px solid #2b7bbe;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 300;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

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

export const List = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
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
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  background-color: #003a70;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 22px;
`;

export const Li = styled.li`
  list-style-type: none;
  color: #003a70;
`;

export const Cardheader = styled.h3`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  text-align: center;
  color: #003a70;
  font-size: 35px;
  font-weight: thick;
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

export const Subtitle = styled.h2`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  text-align: center;
  color: #003a70;
  font-size: 28px;
  font-weight: bold;
`;

export const ImgContainer = styled.img`
  float: left;
  width: 100px;
  height: 100px;

  background-color: #ffcb05;
`;

export const Sprite = styled.img`
  // width: 300px;
  // height: 300px;

  // background-color: #ffcb05;
  padding: 5px;
  width: 25%;
  height: 25%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
