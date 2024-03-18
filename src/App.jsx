import React from 'react';
import Tweet from './components/Tweet';
import './App.css'

function App() {
  return (
    <div className="app">
      <Tweet
        profilePic="https://source.unsplash.com/random/50x50"
        name="John Doe"
        username="johndoe123"
        text="Just learned a new programming language today! #coding #programming"
      />
    </div>
  );
}

export default App;
