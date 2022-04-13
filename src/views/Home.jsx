import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { Heading, Button, VStack } from '@chakra-ui/react';

const API_KEY = '229bdcb1eb995e6c389675c406112540';

export default function Home(props) {
  const [weather, setWeather] = useState({
    description: '',
    temperature: 0,
    cityName: '',
    country: '',
  });

  const getWeatherDataFromApi = (country, city) => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;

    axios
      .get(URL)
      .then(response => {
        const desc = response.data.weather[0].description;
        const temp = response.data.main.temp;
        const name = response.data.name;
        setWeather({
          country,
          description: desc,
          temperature: temp,
          cityName: name,
        });
      })
      .catch(err => console.log(err));
  };

  const handleSaveFav = () => {
    props.saveToFavs(weather.country, weather.cityName);
  };

  return (
    <>
      <Form getDataFromUser={getWeatherDataFromApi} />

      <VStack w="50%" mx="auto" my={8} spacing={4}>
        {weather.cityName ? <Heading>{weather.cityName}</Heading> : ''}
        {weather.description ? <Heading>{weather.description}</Heading> : ''}
        {weather.temperature ? <Heading>{weather.temperature}</Heading> : ''}
        {weather.cityName ? (
          <Button onClick={handleSaveFav}>Save to Favs</Button>
        ) : (
          ''
        )}
      </VStack>
    </>
  );
}
