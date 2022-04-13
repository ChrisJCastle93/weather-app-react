/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Button, Stack, Input, VStack } from '@chakra-ui/react';
import { MdWbSunny } from 'react-icons/md';

export default function Form(props) {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleCityChange = e => {
    const { value } = e.target;
    setCity(value);
  };

  const handleCountryChange = e => {
    const { value } = e.target;
    setCountry(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    props.getDataFromUser(country, city);
    setCity('');
    setCountry('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack w="50%" mx="auto" direction="row" my={8} spacing={4}>
        <>
          <Input
            placeholder="Country"
            type="text"
            name="country"
            value={country}
            onChange={handleCountryChange}
          />
        </>
        <>
          <Input
            placeholder="City"
            type="text"
            name="city"
            value={city}
            onChange={handleCityChange}
          />
        </>
        <>
          <Button
            type="submit"
            w="100%"
            leftIcon={<MdWbSunny />}
            colorScheme="pink"
            variant="solid"
          >
            Submit
          </Button>
        </>
      </Stack>
    </form>
  );
}
