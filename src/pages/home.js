import { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import usePokemonSearch from "../hooks/usePokemonSearch";
import Spinner from "../components/Spinner";
import ErrorContainer from "../components/ErrorContainer";
import styled from "@emotion/styled/macro";
import pokeball from "../images/pokeball.png";
import "../App.css";
import {
  Card,
  Wrapper,
  Header,
  Footer,
  CardContainer,
  Title,
  Paragraph,
  CardHeading1,
  CardHeading2,
  ImgContainer,
} from "../components/homeStyledComponents";

function NavMenu() {
  return (
    <>
      <div>
        <ul className="NavBar">
          <li>
            <NavLink to="/home" isActive={{ background: "#7600dc" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" isActive={{ background: "#7600dc" }}>
              Pokemon
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" isActive={{ background: "#7600dc" }}>
              Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/abilities" isActive={{ background: "#7600dc" }}>
              Abilities
            </NavLink>
          </li>
          <li>
            <NavLink to="/types" isActive={{ background: "#7600dc" }}>
              Types
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

function Home() {
  return (
    <div>
      <Header>
        <Wrapper>
          <ImgContainer src={pokeball} />
          <Title>PokeApi</Title>
        </Wrapper>
        <NavMenu />
      </Header>

      <CardContainer>
        <Card>
          <CardHeading1>
            <h1>What is the PokeAPI?</h1>
          </CardHeading1>
          <Paragraph>
            <p>
              PokeAPI takes in user imput and combines it with the pokemon api
              to query search results and display data.
            </p>
          </Paragraph>
          <CardHeading1>
            <h1>What can I search for?</h1>
          </CardHeading1>
          <Paragraph>
            <p>
              Currently we support searches for pokemon, items, abilities, and
              move/pokemon types.
            </p>
          </Paragraph>
          <CardHeading1>
            <h1>Search format</h1>
          </CardHeading1>
          <Paragraph>
            <p>
              The Api calls only support a very specific format for search
              results. The best practice is to not use capital letters. Also
              when searching for something thats a multiple words seperate them
              by hyphens.
            </p>
          </Paragraph>
          <CardHeading1>
            <h1>Examples</h1>
          </CardHeading1>
          <CardHeading2>
            <h2>Pokemon search</h2>
          </CardHeading2>
          <Paragraph>
            <p>pikachu</p>
          </Paragraph>
          <Paragraph>
            <p>meowth-galar</p>
          </Paragraph>
          <CardHeading2>
            <h2>Items search</h2>
          </CardHeading2>
          <Paragraph>
            <p>choice-scarf</p>
            <p>antidote</p>
          </Paragraph>
        </Card>
      </CardContainer>

      <Footer></Footer>
    </div>
  );
}
export default Home;
