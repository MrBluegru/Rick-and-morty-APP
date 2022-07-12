const { Router } = require("express");
const characters = require("./routeCharacters");
const episodes = require("./routeEpisodes");
const postCharacter = require("./postCharacter");
const router = Router();

// Configurar los routers

router.get("/characters", characters);

router.get("/episodes", episodes);

router.post("/character", postCharacter);

module.exports = router;
