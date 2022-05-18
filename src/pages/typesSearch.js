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
import useTypesSearch from "../hooks/useTypesSearch";
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
} from "../components/searchStyledComponents";

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
  let typesSearch = dataFromParent.dataFromParent;
  console.log("typessearch", typesSearch);
  return (
    <Card>
      <Cardheader>Data on {typesSearch.name} </Cardheader>
      <Subtitle>Damage class {typesSearch.move_damage_class?.name} </Subtitle>
      <Subtitle>Introduced in {typesSearch.generation?.name} </Subtitle>
      <Subtitle>2x Weak to </Subtitle>
      {typesSearch.damage_relations?.double_damage_from.map((types) => (
        <Li key={types.url}>
          {" "}
          <LinkStyle href={"http://localhost:3000/types?q=" + types.name}>
            {types.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <Subtitle>2x Effective to </Subtitle>
      {typesSearch.damage_relations?.double_damage_to.map((types) => (
        <Li key={types.url}>
          {" "}
          <LinkStyle href={"http://localhost:3000/types?q=" + types.name}>
            {types.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <Subtitle>.5x Effective from </Subtitle>
      {typesSearch.damage_relations?.half_damage_from.map((types) => (
        <Li key={types.url}>
          {" "}
          <LinkStyle href={"http://localhost:3000/types?q=" + types.name}>
            {types.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <Subtitle>.5x Effective to </Subtitle>
      {typesSearch.damage_relations?.half_damage_to.map((types) => (
        <Li key={types.url}>
          {" "}
          <LinkStyle href={"http://localhost:3000/types?q=" + types.name}>
            {types.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <Subtitle>Immune to </Subtitle>
      {typesSearch.damage_relations?.no_damage_from.map((types) => (
        <Li key={types.url}>
          {" "}
          <LinkStyle href={"http://localhost:3000/types?q=" + types.name}>
            {types.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <Subtitle>Does not affect </Subtitle>
      {typesSearch.damage_relations?.no_damage_to.map((types) => (
        <Li key={types.url}>
          {" "}
          <LinkStyle href={"http://localhost:3000/types?q=" + types.name}>
            {types.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <Subtitle>List of {typesSearch.name} moves</Subtitle>
      {typesSearch.moves?.map((types) => (
        <Li key={types.url}> {types.name} </Li>
      ))}
    </Card>
  );
}

function Search({ query }) {
  const [inputQuery, setInputQuery] = useState(query || "");
  const [searchParams, setSearchParams] = useSearchParams();

  const [typesSearch, loading, error] = useTypesSearch(query);
  const [itemQuery, setItemQuery] = useState("");
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
                    placeholder="types"
                    onChange={(e) => setInputQuery(e.target.value)}
                  />

                  <Button>Submit</Button>
                </form>
                {waiting == true || typesSearch != 0 ? (
                  <EntireCard dataFromParent={typesSearch} />
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
