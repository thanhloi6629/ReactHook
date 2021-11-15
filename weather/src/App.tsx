import React from 'react';
import Home from 'components/pages/Home/Home';
import Image from 'components/atoms/Image/main';
import Container from 'react-bootstrap/Container';
import 'styles/main.css';
import './App.css';

const App: React.FC<{}> = () => (
  <Container
    className="position-relative p-0 m-0"
    fluid={true}
  >
    <div
      className="position-absolute w-100 h-100"
      style={{
        minHeight: '100vh',
      }}
    >
      <Image src="https://wallpapercave.com/wp/wp5401016.jpg" />
    </div>
    <div
      className="position-absolute w-100 h-100"
      style={{
        minHeight: '100vh',
      }}
    >
      <Home />
    </div>
  </Container>
);

export default App;
