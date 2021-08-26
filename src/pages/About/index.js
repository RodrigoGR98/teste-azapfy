import React from 'react';

import foto from '../../assets/rodrigo.png';

import { Container, Header, Content } from './styles';

function About() {
  return (
    <Container>
      <Header>
        <h2>Sobre Mim</h2>
        <button onClick={() => { window.location = '/' }} className="about-button">HOME</button>
      </Header>
      <Content>
        <div className='about-modal'>
          <div className='foto-holder'>
            <img src={foto}></img>
          </div>
          <div className='info-holder'>
            <span><b>Nome</b>: Rodrigo Gonçalves Ribeiro</span>
            <span><b>Idade</b>: 22</span>
            <span><b>Curso</b>: Sistemas de Informação</span>
            <span><b>E-mail</b>: roxdrigo1883@gmail.com</span>
            <span><b>Instagram: </b>: <a href='https://www.instagram.com/rodrigogr98/'>RodrigoGR98</a></span>
            <span><b>LinkedIn</b>: <a href='https://www.linkedin.com/in/rodrigo-gr98/'>Rodrigo Ribeiro</a></span>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default About;