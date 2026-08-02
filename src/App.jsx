import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import Category from './components/Category';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="w-100 overflow-hidden">
        <Hero />
        <Category />
        <Articles />
        <Footer />
      </main>
    </div>
  );
}

export default App;