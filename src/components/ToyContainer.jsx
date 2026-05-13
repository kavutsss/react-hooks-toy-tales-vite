import React from "react";
import ToyCard from "./ToyCard";

/**
 * ToyContainer component that renders a collection of ToyCard components.
 * Acts as a pass-through component, receiving toys data and handler functions
 * from the parent and passing them down to individual ToyCard components.
 */
function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  return (
    <div id="toy-collection">
      {/* Map through toys array and render a ToyCard for each toy */}
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDeleteToy={onDeleteToy}
          onLikeToy={onLikeToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
