import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes, createCharacter } from "../redux/actions";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import "../styles/createCharacter.css";

export default function CreateCharacter() {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);

  const [input, setInput] = useState({
    name: "",
    image: "",
    origin: "",
    species: "",
    episodes: [],
  });

  // Validacion de ingreso /////////////////////////////////////

  // const regex = {
  //   nombre: /^[a-z ,.'-]+$/i,
  // };

  const validacion = (nombre) => {

    if (nombre.length <= 2) {
      // return "Es un nombre muy corto pibe";
    }
    
  };

  const errorMensaje = validacion(input.name)
  ///////////////////////////////////////////////////////////////

  function handleclick(e) {
    e.preventDefault();
    dispatch(createCharacter());
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(
    () => {
      dispatch(getEpisodes());
    },
    //eslint-disable-next-line
    [dispatch]
  );

  return (
    <div className="createCharacter">
      <div className="titulo-form">
        <span>Creacion de Personaje</span>
      </div>

      <form className="formPerso">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        {/* <p>{errorMensaje}</p> */}

        <label>Especie</label>
        <input
          type="text"
          name="species"
          value={input.species}
          onChange={(e) => handleChange(e)}
        />

        <label>Origen</label>
        <input
          type="text"
          name="origin"
          value={input.origin}
          onChange={(e) => handleChange(e)}
        />

        <label>Episodios</label>
        <select
          type="text"
          name="episodes"
          value={input.episodes}
          onChange={(e) => handleChange(e)}
        >
          {episodes.map(({ id, name }) => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </select>

        <label>Imagen</label>
        <input
          type="text"
          name="image"
          value={input.image}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className="buttons">
        <Link to="/home">
          <button className="buttonGoHome">Volver</button>
        </Link>
        <button
          className="boton_crear"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(createCharacter(input));
            swal("¡Personaje Creado!", {
              className: "swal1",
            });
          }}
          disabled={errorMensaje}
        >
          Crear
        </button>

        <button
          className="boton_añadir1"
          onChange={(e) => {
            handleclick(e);
          }}
        >
          Añadir 1+
        </button>
      </div>
    </div>
  );
}
