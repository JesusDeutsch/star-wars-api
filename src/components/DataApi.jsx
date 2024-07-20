import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const DataApi = () => {

  const [character, setCharacter] = useState([]);


  const getCharacter = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setCharacter(data.results);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect (() => {
  getCharacter();},[])


return (
  <div className='flex items-center justify-center mt-40'>
   <div className="grid grid-cols-5 gap-4 m-5">
    {character.map((item, index) => {
      return (
      <Cards key={index} index={index+1} character={item}/>
      
    )})}
  </div>
    </div>
  )
}

export default DataApi