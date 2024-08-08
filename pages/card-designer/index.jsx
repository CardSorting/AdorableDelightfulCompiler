import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DesignWorkspace from '../../components/carddesigner/DesignWorkspace';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <DesignWorkspace />
      </main>
      <Footer />
    </div>
  );
}

export default App;