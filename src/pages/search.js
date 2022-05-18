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
import usePokemonSearch from "../hooks/usePokemonSearch";
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
  console.log("pkm search", dataFromParent);
  let pokemonSearch = dataFromParent.dataFromParent;
  return (
    <Card>
      <Cardheader>Data on {pokemonSearch.name} </Cardheader>
      <Sprite
        src={pokemonSearch.sprites?.front_default}
        alt={pokemonSearch.name}
      />
      {/* POKEMON TYPES */}
      <Subtitle>Types: </Subtitle>
      {pokemonSearch.types?.map((pokemon) => (
        <Li key={pokemon.slot}>
          {" "}
          <LinkStyle
            href={"http://localhost:3000/types?q=" + pokemon.type.name}
          >
            {pokemon.type.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <p>{pokemonSearch.slot}</p>
      {/* { pOKEMON ABILITIES */}
      <Subtitle>Possible abilities: </Subtitle>
      {pokemonSearch.abilities?.map((pokemon) => (
        <Li key={pokemon.ability.url}>
          {" "}
          <LinkStyle
            href={"http://localhost:3000/abilities?q=" + pokemon.ability.name}
          >
            {pokemon.ability.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      <Subtitle>Possible held items: </Subtitle>

      {pokemonSearch.held_items?.map((pokemon) => (
        <Li key={pokemon.item.name}>
          {" "}
          <LinkStyle
            href={"http://localhost:3000/items?q=" + pokemon.item.name}
          >
            {pokemon.item.name}
          </LinkStyle>{" "}
        </Li>
      ))}
      {/*>OKEMON BASE STATS */}
      <Subtitle>Base Stats: </Subtitle>
      {pokemonSearch.stats?.map((pokemon) => (
        <Li key={pokemon.base_stat}>
          {" "}
          {pokemon.stat.name + ":"} {pokemon.base_stat}{" "}
        </Li>
      ))}
      <Li> experience: {pokemonSearch.base_experience}</Li>
      <Subtitle>Weight: {pokemonSearch.weight}</Subtitle>
      <Subtitle>Height: {pokemonSearch.height}</Subtitle>
    </Card>
  );
}

function Search({ query }) {
  const [inputQuery, setInputQuery] = useState(query || "");
  const [searchParams, setSearchParams] = useSearchParams();

  const [pokemonSearch, loading, error] = usePokemonSearch(query);
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
                    placeholder="Pokemon"
                    onChange={(e) => setInputQuery(e.target.value)}
                  />

                  <Button>Submit</Button>
                </form>
                {waiting == true || pokemonSearch != 0 ? (
                  <EntireCard dataFromParent={pokemonSearch} />
                ) : null}
              </CardContainer>
            }
          </List>
        </ul>
      )}
      {error && <ErrorContainer>Error!</ErrorContainer>}
      <Footer />
    </div>
  );
}
export default Search;
