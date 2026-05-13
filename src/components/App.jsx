import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

/**
 * Main App component that manages the toy collection state and coordinates
 * all CRUD operations between the frontend and backend API.
 */
function App() {
  // State to control form visibility
  const [showForm, setShowForm] = useState(false);
  // State to hold the array of toys fetched from the backend
  const [toys, setToys] = useState([]);

  // Fetch all toys from the backend on component mount
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  // Toggle the toy form visibility
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Add a new toy to the state (called after successful POST request)
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // Remove a toy from the state by filtering out the deleted toy
  function handleDeleteToy(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }

  // Increment likes for a specific toy while maintaining array order
  function handleLikeToy(id) {
    setToys(
      toys.map((toy) => {
        if (toy.id === id) {
          return { ...toy, likes: toy.likes + 1 };
        }
        return toy;
      })
    );
  }

  return (
    <>
      <Header />
      {/* Conditionally render the toy form */}
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {/* Pass toys data and handler functions to ToyContainer */}
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikeToy}
      />
    </>
  );
}

export default App;
