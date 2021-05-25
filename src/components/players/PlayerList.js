import React from 'react';
import { connect } from 'react-redux';
import { playerList, addPlayer, editPlayer, clearWord } from '../../actions';
import { COLORS } from '../constants';

class PlayerList extends React.Component {

  renderPlayer = (player) => {
    return (
      <button className={`ui button player-button ${player.color}`} onClick={(e) => this.assignScore(e, player.id)}>{player.score}</button>
    )
  }
  renderPlayers = () => {
    let button;
    if (this.props.players.length <= 3) {
      button =
        <div className="four wide column">
          <button className="ui button primary" onClick={this.addPlayer}>Add Player</button>
        </div>
    }
    return (
      <div className="ui relaxed grid">
        {button}
        {this.props.players.map((player, index) => (
          <div key={index} className="four wide column">
            {this.renderPlayer(player)}
          </div>
        ))}
      </div>
    )
  }
  onSubmit = (formValues) => {

  };
  addPlayer = (e) => {
    e.preventDefault();
    const index = this.props.players.length + 1;
    const player = { id: index, name: "p" + index, color: COLORS[index - 1], score: 0 };
    this.props.addPlayer(player);
  }
  assignScore = (e, pId) => {
    e.preventDefault();
    const player = this.props.players.find(player => player.id === pId);
    player.score = player.score + this.props.words.currentWord.score;
    this.props.editPlayer(player);
    this.props.clearWord();
  }
  render() {
    return (
      <div>
        
        <div className="footer">
        
          {this.renderPlayers()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    players: Object.values(state.playerList),
    words: state.words
  }
};
export default connect(
  mapStateToProps,
  { playerList, addPlayer, editPlayer, clearWord }
)(PlayerList);
