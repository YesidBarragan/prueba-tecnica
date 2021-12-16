import React from "react";
import { Card, CardContent, Typography } from '@mui/material';
import "./CardsList.css" 

export const CardsList = (props) => {

  return (
    <section className="cards-container">
      
    { props.cities.map(city => (
      <Card key={city?.id} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {city.name}
          </Typography>
          <Typography sx={{ mb: 1.5, mt: 2 }} variant="h6">
            Temperatura
          </Typography>
          <Typography variant="body2">
            {`${city.main.temp} °C`}
          </Typography>
        </CardContent>
      </Card>
    ))}
    </section>
  )
}