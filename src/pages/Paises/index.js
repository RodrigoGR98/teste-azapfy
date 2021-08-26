import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Container, Header, Content, Countries } from './styles';

import world from '../../assets/world.gif';
import api from '../../services/api';

import Country from '../../components/Country';

function Paises() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('all');
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(50);
  const [pagesCount, setPagesCount] = useState(1);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    if (search !== '') {
      getCountriesByName();
    } else {
      getCountries();
    }
  }, [search])

  //TODAS AS VEZES QUE TROCAR A REGIÃO, RESETAR AS PÁGINAS

  useEffect(() => {
    setPage(0);
    setMaxPage(50);
    setActualPage(1);
    getCountriesByRegion();
  }, [region])

  const getCountries = async (p = 0, maxP = 50) => {
    const response = (await api.get('/all')).data;

    //PAGINAÇÃO DO ARRAY DA RESPONSE

    let nPages = response.length / 50;
    if (nPages <= 1) {
      setPagesCount(1);
    } else {
      nPages = Math.ceil(nPages);
      setPagesCount(nPages);
    }
    var sliced = response.slice(p, maxP);

    setCountries(sliced);
  }

  const getCountriesByName = async (p = 0, maxP = 50) => {
    const response = (await api.get(`/name/${search}`)).data;

    //PAGINAÇÃO DO ARRAY DA RESPONSE

    let nPages = response.length / 50;
    if (nPages <= 1) {
      setPagesCount(1);
    } else {
      nPages = Math.ceil(nPages);
      setPagesCount(nPages);
    }
    var sliced = response.slice(p, maxP);

    setCountries(sliced);
  }

  const getCountriesByRegion = async (p = 0, maxP = 50) => {
    if (region === 'all') {
      getCountries();
    } else {
      const response = (await api.get(`/region/${region}`)).data;

      //PAGINAÇÃO DO ARRAY DA RESPONSE

      let nPages = response.length / 50;
      if (nPages <= 1) {
        setPagesCount(1);
      } else {
        nPages = Math.ceil(nPages);
        setPagesCount(nPages);
      }
      var sliced = response.slice(p, maxP);

      setCountries(sliced);
    }
  }

  //TROCA A PÁGINA E REPAGINA O ARRAY

  const changePage = (method) => {
    if (method === 'right') {
      setActualPage(actualPage + 1);
      let p = page + 50;
      let maxP = maxPage + 50;
      setPage(p);
      setMaxPage(maxP);
      if (region === 'all') {
        getCountries(p, maxP);
      } else {
        getCountriesByRegion(p, maxP);
      }
    } else {
      setActualPage(actualPage - 1);
      let p = page - 50;
      let maxP = maxPage - 50;
      setPage(p);
      setMaxPage(maxP);
      if (region === 'all') {
        getCountries(p, maxP);
      } else {
        getCountriesByRegion(p, maxP);
      }
    }
  }

  return (
    <Container>
      <Header>
        <div className="cropped">
          <img src={world} alt="loading..." />
        </div>
        <h2>Where in the World?</h2>
        <button onClick={() => { window.location = '/about' }} className="about-button">SOBRE MIM</button>
      </Header>
      <Content>
        <div className="filtering">
          <input placeholder="Procurar país" onChange={e => { setSearch(e.target.value); setSearch(e.target.value) }}></input>
          <div className="select-region">
            <div className="pagination">
              <span>Página {actualPage} de {pagesCount}</span>
              <button className={'change-page'} onClick={() => changePage('left')} disabled={(actualPage === 1 || search !== '')}><MdKeyboardArrowLeft /></button>
              <button className={'change-page'} onClick={() => changePage('right')} disabled={(actualPage === pagesCount || search !== '')}><MdKeyboardArrowRight /></button>
            </div>
            <label>Filtrar por região:</label>
            <select value={region} onChange={e => setRegion(e.target.value)}>
              <option value={'all'}>Todas</option>
              <option value={'africa'}>Africa</option>
              <option value={'americas'}>Americas</option>
              <option value={'asia'}>Asia</option>
              <option value={'europe'}>Europa</option>
              <option value={'oceania'}>Oceania</option>
            </select>
          </div>
        </div>
        <Countries>
          {countries.map(country => (
            <Country country={country} />
          ))}
        </Countries>
      </Content>
    </Container>
  );
}

export default Paises;