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
import useitemSearch from "../hooks/useItemSearch";
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
} from "../components/itemsStyledComponents";

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
  let itemSearch = dataFromParent.dataFromParent;
  console.log("typessearch", itemSearch);
  return (
    <Card>
      <Cardheader>Data on {itemSearch.name} </Cardheader>
      <Sprite src={itemSearch.sprites?.default} alt={itemSearch.name} />
      <Subtitle>Item description </Subtitle>
      {itemSearch.effect_entries?.map((item) => (
        <>
          <Li>
            <Paragraph>
              <strong>{"Effect: "}</strong>
              {item.effect + " "}
            </Paragraph>
            <Paragraph>
              <strong>{"Short  Effect: "}</strong>
              {item.short_effect + " "}
            </Paragraph>
          </Li>
        </>
      ))}
      <Subtitle>Cost: {itemSearch.cost}</Subtitle>
    </Card>
  );
}
function Search({ query }) {
  const [inputQuery, setInputQuery] = useState(query || "");
  const [searchParams, setSearchParams] = useSearchParams();

  const [itemSearch, loading, error] = useitemSearch(query);
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
                    placeholder="item"
                    onChange={(e) => setInputQuery(e.target.value)}
                  />

                  <Button>Submit</Button>
                </form>
                {waiting == true || itemSearch != 0 ? (
                  <EntireCard dataFromParent={itemSearch} />
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
