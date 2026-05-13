# Toy Tales - React Toy Collection App

A React application that allows users to manage a collection of toys with full CRUD functionality. Users can view all toys, add new toys, like toys to increase their popularity, and donate (delete) toys they no longer want.

## Features

- **View All Toys**: Displays a collection of toys with their names, images, and like counts on page load
- **Add New Toys**: Submit a form to create new toys with custom names and image URLs
- **Like Toys**: Click the like button to increment a toy's likes count
- **Donate Toys**: Remove toys from the collection by clicking the "Donate to GoodWill" button

## Tech Stack

- **Frontend**: React 19 with hooks (useState, useEffect)
- **Backend**: json-server (RESTful API)
- **Build Tool**: Vite
- **Testing**: Vitest with React Testing Library

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the backend server (json-server):
```bash
npm run server
```
This starts the API at `http://localhost:3001`

3. Start the React development server:
```bash
npm run dev
```
This starts the app at `http://localhost:5173`

4. Run the test suite:
```bash
npm run test
```

## Component Architecture

The application follows React best practices with state lifting and prop drilling:

- **App**: Main component that manages the toys state and coordinates all CRUD operations
- **ToyContainer**: Pass-through component that renders the collection of ToyCard components
- **ToyCard**: Displays individual toy information with like and delete functionality
- **ToyForm**: Controlled form component for creating new toys
- **Header**: Displays the application header image

## API Endpoints

- `GET /toys` - Fetch all toys
- `POST /toys` - Create a new toy
- `PATCH /toys/:id` - Update a toy's likes
- `DELETE /toys/:id` - Delete a toy

## Screenshots

![Toy Tales Application](./screenshot.png)

## Development Notes

- State is managed in the App component following the "lifting state up" pattern
- All API calls are made using the native fetch API
- Form inputs are controlled components for better state management
- The application maintains toy order when updating likes using array.map()
