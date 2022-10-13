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

  // console.log('data', people);
  // console.log('lastSegment', peopleurl);
  
  // var url = "https://swapi.dev/api/people/11/"  
//   const newwUrl = url.slice(0, url.lastIndexOf('/'));
//   const lasttSegment = newUrl.split("/").pop();
//  console.log(lastSegment)
//   console.log(people);

  let newUrl;
  let mainUrl;
  let lastSegment;
    return (
      <>
      <div className='bg-black relative max-w-[1150px] m-auto w-full pt-[150px] pb-[80px] text-black'>
        <div className='container-black m-auto px-[80px]'>
          <div className='select-people text-right mb-[70px]'>
          <select id="colorselector" className='invert border border-black p-[10px] min-w-[200px] rounded-[5px]'>
            <option value="all">All</option>
            {people.map(peoplename => (
            //  newUrl = peoplename.url,
            newUrl = peoplename.url,
             mainUrl = newUrl.slice(0, newUrl.lastIndexOf('/')),
             lastSegment = mainUrl.split("/").pop(),
              <option value={lastSegment}>{peoplename.name}</option>
            ))}
          </select>
          </div>
          <ul className='col-3'>
            
          {people.map(x => (
            newUrl = x.url,
            mainUrl = newUrl.slice(0, newUrl.lastIndexOf('/')),
             lastSegment = mainUrl.split("/").pop(),
              <Card url={lastSegment} key={x.name} name={x.name} height={x.height} mass={x.mass} hair_color={x.hair_color} skin_color={x.skin_color} gender={x.gender} birth_year={x.birth_year} />
              ))}
          </ul>
        </div>
        <div id="container"></div>
      </div>
      </>
    );
  }


export default People;