import React from 'react';
import Navigation from './Navigation.js'
import Footer from './footer.js'
import Carousels from './carousel.js'
import Jumbotrons from './Jumbotron.js'

function Home() {
  return (
    <div>
      <Navigation />
      <Carousels />
      <Footer />
    </div>
  );
}

export default Home;
