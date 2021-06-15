import React from 'react';
import PropTypes from 'prop-types';
const Stats = (props) =>
{
    const totalPlayers = props.players.length;
    //reduce() method reduces the array to a single value
    /*The reduce method takes a callback function that gets execued on each element of the array and
    the callback takes two parameters - an accumulator, that adds up the return values and the current
    item being processed in the array*/
    const totalpoints = props.players.reduce((total, player) => {
        return total + player.score;

    }, 0);

    return(
        <table className = 'Stats'>
            <tbody>
                <tr>
                    <td>PLayers:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalpoints}</td>
                </tr>
            </tbody>
        </table>
    

    );
}

Stats.PropTypes = {
    players : PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Stats;
