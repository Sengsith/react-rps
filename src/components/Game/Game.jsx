import React, { useEffect } from "react";

import Choice from "../../classes/Choice";
import ChoiceComponent from "../ChoiceComponent/ChoiceComponent.jsx";

const Game = () => {
  // Plan to reuse a single component(Choice) for each RPS component
  // Create an object for each choice
  // Create an array for these objects
  // Map out the array and render out a choice component

  const rock = new Choice({
    selection: "rock",
    url: "./src/assets/icon-rock.svg",
  });
  const paper = new Choice({
    selection: "paper",
    url: "./src/assets/icon-paper.svg",
  });
  const scissors = new Choice({
    selection: "scissors",
    url: "./src/assets/icon-scissors.svg",
  });
  // Map through each index and render option to screen
  const choicesArr = [rock, paper, scissors];

  // Game logic:
  // User selects an option
  // Random number generator to make house selection, create new instance of that choice(inherited)
  // Compare the two using users object
  // Determine the winner and render to screen
  // Increment score
  // Save to local storage on close

  return (
    <div>
      {choicesArr.map((choice, index) => {
        return <ChoiceComponent key={index} choice={choice} />;
      })}
    </div>
  );
};

export default Game;
