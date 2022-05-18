import React from "react";
import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";

import Search from "./pages/search";
import Home from "./pages/home";
import ItemSearch from "./pages/itemSearch";
import AbilitySearch from "./pages/abilitiesSearch";
import TypesSearch from "./pages/typesSearch";
import Post from "./pages/post";
import Error404 from "./pages/Error";
import styled from "@emotion/styled/macro";
import "./App.css";
function App() {
  const [searchParams] = useSearchParams();
  return (
    <div className="background">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/search"
          element={<Search query={searchParams.get("q")} />}
        />
        <Route
          path="/items"
          element={<ItemSearch query={searchParams.get("q")} />}
        />
        <Route
          path="/abilities"
          element={<AbilitySearch query={searchParams.get("q")} />}
        />
        <Route
          path="/types"
          element={<TypesSearch query={searchParams.get("q")} />}
        />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
