const { getCharactersApi, getCharactersDB } = require("../data/dataCharacters");


const characters = async (req, res) => {
  try {
    const charactersApi = await getCharactersApi();
    const charactersdB = await getCharactersDB();
    const allData = charactersApi.concat(charactersdB);
    res.json(allData);
  } catch (error) {
    res.json({ msj: `No se pudo obtener los personajes` });
  }
};
module.exports = characters;
