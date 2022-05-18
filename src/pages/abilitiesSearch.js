import { useState, useEffect } from "react";
import {
  useSearchParams,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
} from "react-router-dom";
import useAbilitiesSearch from "../hooks/useAbilitiesSearch";
import Spinner from "../components/Spinner";
import ErrorContainer from "../components/ErrorContainer";
import styled from "@emotion/styled/macro";
import pokeball from "../images/pokeball.png";
import "../App.css";
import {
  Input,
  LinkStyle,
  Paragraph,
  Button,
  Wrapper,
  Header,
  Footer,
  List,
  Card,
  CardContainer,
  Li,
  Cardheader,
  Title,
  Subtitle,
  ImgContainer,
  Sprite,
} from "../components/abilitiesStyledComponents";

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

function EntireCard(dataFromParent) {
  console.log("pkm search", dataFromParent.dataFromParent);
  let abilitySearch = dataFromParent.dataFromParent;
  return (
    <Card>
      <Cardheader> {abilitySearch.name} </Cardheader>

      <Subtitle>Introduced in {abilitySearch.generation?.name}</Subtitle>
      <Subtitle>ability description </Subtitle>
      <Paragraph>
        {abilitySearch.effect_entries?.map((ability) => (
          <Li key={ability.short_effect}>
            <strong>{"Short  Effect: "}</strong>
            {ability.short_effect + " "}
          </Li>
        ))}
      </Paragraph>
      <Subtitle>Pokemon(s) with this ability </Subtitle>
      {abilitySearch.pokemon?.map((ability) => (
        <Li>
          {" "}
          <LinkStyle
            href={"http://localhost:3000/search?q=" + ability.pokemon.name}
          >
            {ability.pokemon.name}
          </LinkStyle>{" "}
        </Li>
      ))}
    </Card>
  );
}

function Search({ query }) {
  const [inputQuery, setInputQuery] = useState(query || "");
  const [searchParams, setSearchParams] = useSearchParams();

  const [abilitySearch, loading, error] = useAbilitiesSearch(query);
  const [waiting, setWaitingQuery] = useState(false);
  return (
    <div>
      <Header>
        <Wrapper>
          <ImgContainer src={pokeball} />
          <Title>PokeApi</Title>
        </Wrapper>
        <NavMenu />
      </Header>

      {loading ? (
        <Spinner />
      ) : (
        <ul>
          <List>
            {
              <CardContainer>
                <form
                  onSubmit={(e) => {
                    if (inputQuery != "") {
                      e.preventDefault();
                      setSearchParams({ q: inputQuery.toLowerCase() });
                      setWaitingQuery(true);
                      console.log("====input", inputQuery);
                    }
                  }}
                >
                  <Input
                    value={inputQuery}
                    placeholder="ability"
                    onChange={(e) => setInputQuery(e.target.value)}
                  />

                  <Button>Submit</Button>
                </form>
                {waiting == true || abilitySearch != 0 ? (
                  <EntireCard dataFromParent={abilitySearch} />
                ) : null}
              </CardContainer>
            }
          </List>
        </ul>
      )}
      {error && <ErrorContainer>Error!</ErrorContainer>}
      <Footer></Footer>
    </div>
  );
}
export default Search;
