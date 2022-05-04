import React from 'react'

export default class Resultado extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Resultado: {this.props.res.toFixed(1)}</p>
      </div>
    )
  }
}