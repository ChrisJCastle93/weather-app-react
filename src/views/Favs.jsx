import React from 'react';
import { Grid, VStack, Heading } from '@chakra-ui/react';

export default function Favs(props) {
  return (
    <Grid>
      {props.ListOfFavs.map( (place, index) => {
        return <VStack w="50%" key={index} mx="auto" my={8} spacing={4}>
          <Heading>{place.country}</Heading>
          <Heading size="lg">{place.city}</Heading>
        </VStack>;
      })}
    </Grid>
  );
}
