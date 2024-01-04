import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
