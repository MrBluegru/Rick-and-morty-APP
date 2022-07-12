const { Character, Episode } = require("../db");


const postCharacter = async (req, res) => {
  try {
    let { name, species, origin, image, created, episode } = req.body;
    let characterCreated = await Character.create({
      name,
      species,
      origin,
      image,
      created,
    });
    let episodesDB = await Episode.findAll({
      where: {
        name: episode,
      },
    });
    characterCreated.addEpisode(episodesDB);
    res.json(characterCreated);
  } catch (error) {
    res.json({ msj: `No se pudo crear el personaje` });
  }
};

module.exports =  postCharacter ;
