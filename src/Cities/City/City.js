import React from 'react';

const City = (props)=>{

  return(
    <div>
      Hello {props.city},country:{props.country},temp: {props.temp},pop: {props.pop}
    </div>
  );
}

export default City;