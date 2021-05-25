import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { scoreWord } from '../../actions';
import { _countScore } from '../helper';
class WordScore extends React.Component {

    renderLetter = (lIndex, data) => {
        let btn_class_2 = data.multiplier === 2 ? 'red' : 'green';
        let btn_class_3 = data.multiplier === 3 ? 'red' : 'green';
        return (
            <div className="ui relaxed grid">
                <div className="four wide column">
                    <button className="ui button primary">{data.letter}</button>
                </div>
                <div className="four wide column">
                    <button className={`ui button ${btn_class_2}`}
                        onClick={(e) => { this.multiplyLetter(e, 2, lIndex) }}>2X</button>
                </div>
                <div className="four wide column">
                    <button className={`ui button ${btn_class_3}`} onClick={(e) => this.multiplyLetter(e, 3, lIndex)}>3X</button>
                </div>
                <div className="four wide column">
                    <button className="ui button primary">{data.value * data.multiplier}</button>
                </div>
            </div>
        )
    }

    renderList = () => {
        const letters = this.props.wordObj.letters;
        let score;
        if (letters.length > 0)
            score =
                <div className="ui relaxed grid">
                    <div className="twelve wide column"><button className="ui button green">Score:</button></div>
                    <div className="four wide column"><button className="ui button red">{this.props.wordObj.score}</button></div>
                </div>
        return (
            <ul>
                {letters.map((l, index) => (
                    <li key={index}>
                        {this.renderLetter(index, l)}
                    </li>
                ))}
                {score}
            </ul>
        )
    }

    onSubmit = formValues => {

    };

    multiplyLetter = (e, multiplier, index) => {
        e.preventDefault();
        if (this.props.wordObj.letters[index].multiplier === multiplier) {
            this.props.wordObj.letters[index].multiplier = 1;
        } else {
            this.props.wordObj.letters[index].multiplier = multiplier;
        }
        this.props.wordObj.score = 0;
        const score = _countScore(this.props.wordObj);
        const wordObj = { ...this.props.wordObj, score };
        this.props.scoreWord(wordObj);
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        wordObj: state.words.currentWord,
        score: state.words.currentWord.score
    }
};

const formWrapped = reduxForm({
    form: 'wordScore',
})(WordScore);

export default connect(
    mapStateToProps,
    { scoreWord }
)(formWrapped);