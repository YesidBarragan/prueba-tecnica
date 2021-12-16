import React, { useEffect, useState } from "react";
import Axios from "axios";
import { CardsList } from "../components/CardsList/CardsList";
import { NavBar } from "../components/NavBar/NavBar";

export const Home = () => {

  const [citiesList, setCitiesList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Axios({
      url: "http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&lang=sp&units=metric&appid=b8bcc19e6947847277ebd3db74b6f0b2"
    })
    .then((response) => {
      setCitiesList(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [setCitiesList])

  if (isLoading) {
    return (
      <div>
        <h2>Cargando ...</h2>
      </div>
    )
  }

  console.log(citiesList)

  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <CardsList
        cities={citiesList.list}
      />
    </>
  )
}