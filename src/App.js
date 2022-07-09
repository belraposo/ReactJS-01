import React, { Component } from 'react';
import './index.css';

class Infos extends Component{
  state = {
    nome: 'Isabel',
    idade: 20,
    comidaFavorita: 'Batata-frita',
    musica: ['Slipknot - Snuff', 'Mr.Kitty - After Dark', 'Miki Matsubara - Stay With Me']
  }

  render(){
    return(
      <main>
        <div className='box'>
          <h1>Nome: {this.state.nome}</h1>
          <h2>Idade: {this.state.idade}</h2>
          <h3>Comida Favorita: {this.state.comidaFavorita}</h3>
          <h4>Músicas Favoritas:</h4>
          <ul className='list'>
            <li onClick={() => window.open(['https://www.youtube.com/watch?v=LXEKuttVRIo'], '_blank')}>{this.state.musica[0]}</li>
            <li onClick={() => window.open(['https://www.youtube.com/watch?v=Cl5Vkd4N03Q'], '_blank')}>{this.state.musica[1]}</li>
            <li onClick={() => window.open(['https://www.youtube.com/watch?v=VEe_yIbW64w'], '_blank')}>{this.state.musica[2]}</li>
          </ul>
        </div>
      </main>
    )
  }
}

export default Infos;
