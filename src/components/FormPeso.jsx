import React from 'react'

export default class FormPeso extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <label>
          Peso
          <input type="text" value={this.props.p} onChange={(e) => this.props.sp(e.target.value)} />
        </label>
      </div>
    )
  }
}