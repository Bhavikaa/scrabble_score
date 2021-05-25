import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createWord } from '../../actions';
import { LETTER_VALUES } from '../constants';
import { _countScore } from '../helper';


class WordCreate extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    const word = formValues.title.toUpperCase();
    const wordArr = [...word];
    const letters = [];
    wordArr.map(tile => {
      const tileObj = LETTER_VALUES.find(letter => letter.tile = tile);
      let obj = { letter: tile, value: tileObj.value, multiplier: 1 };
      letters.push(obj);
      return letters;
    });
    const multiplier = 1;
    let wordObj = { word, letters, multiplier };
    const score = _countScore(wordObj);
    wordObj = { word, letters, score, multiplier };
    formValues.title = "";
    this.props.createWord(wordObj);
  };

  multiplyWord = (multiplier, e) => {
    e.preventDefault();
    this.props.wordObj.score = 0;
    let wordObj = { ...this.props.wordObj, multiplier };
    const score = _countScore(wordObj);
    wordObj = { ...this.props.wordObj, score, multiplier };
    this.props.createWord(wordObj);
  }

  render() {
    const btn_class_2 = this.props.wordObj.multiplier === 2 ? 'red' : 'green';
    const btn_class_3 = this.props.wordObj.multiplier === 3 ? 'red' : 'green';
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      ><div className="ui grid relaxed">
          <div className="eight wide column">
            <Field name="title" component={this.renderInput} />
          </div>
          <div className="two wide column">
            <button className={`ui button ${btn_class_2}`} onClick={(e) => this.multiplyWord(2, e)}>2X</button>
          </div>
          <div className="two wide column">
            <button className={`ui button ${btn_class_3}`} onClick={(e) => this.multiplyWord(3, e)}>3X</button>
          </div>
          <div className="two wide column">
            <button className="ui button primary" onClick={this.createWord}>Go</button>
          </div>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please enter word';
  }
  return errors;
};

const mapStateToProps = state => {
  return { wordObj: state.words.currentWord }
};

const formWrapped = reduxForm({
  form: 'wordCreate',
  validate
})(WordCreate);

export default connect(
  mapStateToProps,
  { createWord }
)(formWrapped);
