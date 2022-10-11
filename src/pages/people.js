import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../custom.js';


function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people');
      let data = await res.json();
        setPeople(data.results);
    }
      fetchPeople();

  },[]);

  console.log('data', people);

    return (
      <>
      <div className='bg-black relative max-w-[1150px] m-auto w-full pt-[150px] pb-[80px] text-black'>
        <div className='container-black m-auto px-[80px]'>
          <ul className='col-3'>
            {people.map(x => (
              <Card key={x.name} name={x.name} height={x.height} mass={x.mass} hair_color={x.hair_color} skin_color={x.skin_color} gender={x.gender} birth_year={x.birth_year} />
            ))}  
          </ul>
        </div>
        <div id="container"></div>
      </div>
      </>
    );
  }


export default People;