import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions";
import Card from "./Card";
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

      <div className="cards">
        {characters.map((e) => {
          return (
            <Card
              key={e.image}
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
