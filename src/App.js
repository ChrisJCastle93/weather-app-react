import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Favs from './views/Favs';

function App() {
  const [ListOfFavs, setListOfFavs] = useState([]);

  const saveToFavs = (country, city) => {
    const newItem = { country, city };
    setListOfFavs([...ListOfFavs, newItem]);
  };
  console.log(ListOfFavs, '<=== List of Favs');

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Home saveToFavs={saveToFavs} />} />
          <Route
            path={'/favourites'}
            element={<Favs ListOfFavs={ListOfFavs} />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
