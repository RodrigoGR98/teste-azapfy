import React, { useEffect } from 'react';

import { Container, Modal, Holder } from './styles';
import { MdClose } from "react-icons/md";

function InfoCountry({ country, setShow }) {

  return (
    <Container>
      <Modal>
        <button onClick={() => { setShow(false) }}><MdClose /></button>
        <Holder>
          <div className="info-left">
            <img src={country.flag}></img>
            <div className="text-holder">
              <span><h3><strong>{country.name}</strong></h3></span>
              <span className='country-data'>População: <b>{country.population}</b></span>
              <span className='country-data'>Região: <b>{country.region}</b></span>
              <span className='country-data'>Capital: <b>{country.capital}</b></span>
            </div>
          </div>
          <div className="info-right">
            <h2>Informações</h2>
            <span className='country-data'><b>Nome nativo: </b>{country.nativeName}</span>
            <span className='country-data'><b>Moeda: </b>{country.currencies[0].name} - {country.currencies[0].symbol}</span>
            <span className='country-data'><b>Código de chamada: </b>{country.callingCodes}</span>
            <span className='country-data'><b>Domínio: </b>{country.topLevelDomain}</span>
            <span className='country-data'><b>Sub-região: </b>{country.subregion}</span>
            <span className='country-data'><b>Idioma: </b>{country.languages[0].name}</span>
            <span className='country-data'><b>Indice de Gini: </b>{country.gini !== null ? country.gini : 'n/a'}</span>
            <span className='country-data'><b>Nacionalidade: </b>{country.demonym}</span>
            <span className='country-data'><b>AlphaCode(3): </b>{country.alpha3Code}</span>
          </div>
        </Holder>
      </Modal>
    </Container>
  );
}

export default InfoCountry;