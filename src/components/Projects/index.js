import { tripcraft, gamehub, pygame, portfolio } from "./imgs";

const projects = [
  {
    name: "TripCraft",
    img: tripcraft,
    description:
      "A website which leverages the power of OpenAI's GPT 3.5 Turbo to generate trip itineraries for the users based on input given by user. All the trip itineraries are stored in database",
    stack: ["ReactJS", "Express", "MongoDB", "OpenAI API"],
    git: "https://github.com/theharshrijhwani/TripCraft",
  },
  {
    name: "GameHub",
    img: gamehub,
    description:
      "A website to browse games on various platforms. User can filter out the games based on genre and the platform.",
    stack: ["ReactJS", "TypeScript", "RAWG API"],
    git: "https://github.com/theharshrijhwani/game-hub",
  },
  {
    name: "BST Operations Vishualizer",
    img: pygame,
    description:
      "This application visualizes operations that can be performed on a binary search tree such as insert, delete, depth, leaf nodes and clearing the tree.",
    stack: ["Python", "PyGame Library"],
    git: "https://github.com/theharshrijhwani/binary_tree_mpr",
  },
  {
    name: "Portfolio Website",
    img: portfolio,
    description:
      "A portfolio website showcasing all my technical skills and projects I have worked on",
    stack: ["React", "Javacript", "FramerMotion"],
    git: "https://www.github.com",
  },
];

export { projects };
