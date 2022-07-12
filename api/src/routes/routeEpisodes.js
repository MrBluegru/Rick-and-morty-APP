const { Episode, Character } = require("../db.js");

const episodes = async (req, res) => {
  try {
    const episodes = await Episode.findAll();
    res.json(episodes);
  } catch (error) {
    res.json({ msj: `No se pudo obtener los episodios` });
  }
};
module.exports = episodes;
