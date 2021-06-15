import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter'; 
import Header from './Header';
import Icon from './Icon'; 
/*Counter doesn't go into app.js because the counter component is a dependency of the player component only */


class Player extends PureComponent {
  static PropTypes = {
    changeScore : PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score : PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
    };

 
  render(){
      const {
        name,
        id,
        score,
        index,
        removePlayer,
        changeScore } =this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() =>removePlayer(id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore}/>
          { name }
        </span>
  
        <Counter 
            score={score}
            index = {index}
            changeScore = {changeScore}   
        /> 
      </div>
    );

  }

}


  export default Player;