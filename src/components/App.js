import React, { Component } from 'react';
import Header from './Header'; /*import will pull the header func from the header module and into the app module */
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Naruto",
        score: 0,
        id: 1
      },
      {
        name: "Sasuke",
        score: 0,
        id: 2
      },
      {
        name: "Sakura",
        score: 0,
        id: 3
      },
      {
        name: "Kakashi",
        score: 0,
        id: 4
      }
    ]
  };



  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    //console.log(...this.state.players);
    this.setState(prevState => {
      return{
        players: [
          ...this.state.players,
        //this merges the exsisting player state with the new array being created
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }

        ]
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }
    


  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          //title="Scoreboard" 
          players = {this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore = {this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}  
            isHighScore={highScore === player.score}   
            //isHighScore={this.getHighScore()== PlayerList.score}

          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>




      </div>
    );
  }
}

export default App;
