const axios = require("axios");
const { Episode } = require("../db.js");

const getEpisodesDB = async () => {
  if (!(await Episode.findAll()).length) {
    const nroPages = (
      await axios.get("https://rickandmortyapi.com/api/episode")
    ).data.info.pages;

    let links = [];
    for (let i = 1; i <= nroPages; i++) {
      links.push(`https://rickandmortyapi.com/api/episode?page=${i}`);
    }
    const data = await Promise.all(links.map((link) => axios.get(link)));
    const episodes = data.map((e) => e.data.results).flat();

    await Episode.bulkCreate(episodes);
    console.log(`Episodes created`);
  } else {
    console.log(`Episodes already created`);
  }
};

module.exports = getEpisodesDB;
