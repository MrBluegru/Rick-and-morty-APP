import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions";
import Card from "./Card";
import NavBar from "./NavBar";
import "../styles/home.css";

export default function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(
    () => {
      dispatch(getCharacters());
    },
    //eslint-disable-next-line
    [dispatch]
  );

  return (
    <div className="home">
      <div className="titulo">
        <h1>Personajes</h1>
      </div>

      <NavBar />

      <div className="cards">
        {characters.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              image={e.image}
              name={e.name}
              origin={e.origin}
              species={e.species}
              episodes={e.episodes}
              />
          );
        })}
      </div>

    </div>
  );
}
