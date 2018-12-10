import React from 'react';
import City from './City/City';

const Cities = (props)=>

  props.list.map((c)=>{
    return <City city={c.city} country={c.country} temp={c.temp}/>
  });



export default Cities;