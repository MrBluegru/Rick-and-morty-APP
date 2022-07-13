const axios = require("axios");
const { Episode, Character } = require("../db.js");

const getCharactersApi = async () => {
  const nroPages = 42;
  let links = [];
  for (let i = 1; i <= nroPages; i++) {
    links.push(`https://rickandmortyapi.com/api/character?page=${i}`);
  }
  const data = await Promise.all(links.map((link) => axios.get(link)));
  const characters = data
    .map((e) =>
      e.data.results.map((e) => {
        return {
          id: e.id,
          name: e.name,
          species: e.species,
          origin: e.origin.name,
          image: e.image,
          created: e.created,
        };
      })
    )
    .flat();
  return characters;
};

const getCharactersDB = async () => {
  const charactersDB = await Character.findAll({
    include: [
      { model: Episode, attributes: ["name"], through: { attributes: [] } },
    ],
  });
  const DBchart = charactersDB.map((e) => {
    return {
      id: e.id,
      name: e.name,
      species: e.species,
      origin: e.origin,
      image: e.image,
      created: e.created,
      episodes: e.episodes.map((e) => e.name),
    };
  });
  return DBchart;
};

module.exports = { getCharactersApi, getCharactersDB };
