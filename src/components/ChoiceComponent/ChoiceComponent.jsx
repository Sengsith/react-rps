import React from "react";

const ChoiceComponent = ({ choice }) => {
  return (
    <div>
      <img src={choice.url} alt={choice.selection} />
    </div>
  );
};

export default ChoiceComponent;
