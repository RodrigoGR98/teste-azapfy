import React, { useState, useEffect } from 'react';
import InfoCountry from '../InfoCountry';

import { Container } from './styles';

function Country({ country }) {

  const [show, setShow] = useState(false);

  return (
    <Container>
      <div onClick={() => { setShow(true) }}>
        <div className="country-flag">
          <img src={country.flag}></img>
        </div>
        <div className="country-info">
          <span className='country-name'>{country.name}</span>
          <span className='country-data'>População: <b>{country.population}</b></span>
          <span className='country-data'>Região: <b>{country.region}</b></span>
          <span className='country-data'>Capital: <b>{country.capital}</b></span>
        </div>

      </div>

      {show && (
        <InfoCountry
          country={country}
          setShow={setShow}
        />
      )}
    </Container>
  );
}

export default Country;