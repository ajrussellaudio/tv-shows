const express = require("express");
const apiStub = express.Router();

const SHOWS = [
  {
    id: 1,
    name: "Alan's first TV show",
    summary: "Poor production values",
    image: {
      medium:
        "https://cnet4.cbsistatic.com/img/3P3dM2R9lDVE1xZIMXHuWe-rTMM=/506x0:4902x3263/970x0/2018/07/03/83b114a5-35ef-46c5-9449-feac71bb404d/gettyimages-873099052.jpg"
    }
  },
  {
    id: 2,
    name: "Late Night with Alan Russell",
    summary: "Awesome. First class.",
    image: {
      medium:
        "https://cdn-01.independent.ie/entertainment/movies/article29306216.ece/f511f/AUTOCROP/w620/PANews_N0099901369825076433A_I1.jpg"
    }
  },
  {
    id: 3,
    name: "It's Me, Alan Russell",
    summary: "Mediocre. Coasting on previous success",
    image: {
      medium: "https://media.breitbart.com/media/2015/10/seth-rogen-getty.jpg"
    }
  }
];

apiStub.get("/search/shows", (req, res) => {
  console.log("query received:", req.url);
  res.send(SHOWS.map(show => ({ show })));
});

apiStub.get("/shows/:id", (req, res) => {
  console.log(`Show requested. ID: ${req.params.id}`);
  res.send(SHOWS.find(({ id }) => id == req.params.id));
});

module.exports = apiStub;
