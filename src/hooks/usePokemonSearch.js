import  { useState, useEffect } from 'react';

function DoPokemonSearch(query){

  const [ pokemonData, setPokemonData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    async function fetchSearchResults() {
      let responseBody = {};
      setLoading(true);
      try {
        const response = await fetch(

          ` https://pokeapi.co/api/v2/pokemon/${query}/`,
          //` https://pokeapi.co/api/v2/pokemon/pikachu/`,
          { signal: controller.signal }
        );
        responseBody = await response.json();

      } catch (e) {
        if (e instanceof DOMException) {
          console.log("== HTTP request cancelled")
        } else {
          setError(true);
          throw e;
        }
      }
      if (!ignore) {
        setLoading(false);
        setError(false);
        setPokemonData(responseBody);
        console.log("response body", responseBody);
      }
    }
    if (query) {
      fetchSearchResults()

    }
    return () => {
      controller.abort();
      ignore = true;
    }
  }, [ query ]);
  console.log(pokemonData)
  return [ pokemonData, loading, error ];
}
export default DoPokemonSearch;
