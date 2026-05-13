import React from "react";

/**
 * ToyCard component that displays individual toy information and provides
 * interactive buttons for liking and deleting toys.
 * Makes API calls to the backend to update toy data.
 */
function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  // Handle like button click: send PATCH request to increment likes
  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((r) => r.json())
      .then((updatedToy) => onLikeToy(updatedToy.id));
  }

  // Handle delete button click: send DELETE request to remove toy
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => onDeleteToy(toy.id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
