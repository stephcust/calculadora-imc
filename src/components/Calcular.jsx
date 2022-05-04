import React from 'react';

export default class Calcular extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  calc = () => {
    this.props.setRes(this.props.peso / (this.props.alt * this.props.alt));
  }
  render() {
    return (
      <div>
        <button onClick={this.calc}>Calcular</button>
      </div>
    )
  }
}