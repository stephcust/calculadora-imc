import React from 'react'

export default class FormAltura extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label>
          Altura
          <input type="text" value={this.props.a} onChange={(e) => this.props.sa(e.target.value)} />
        </label>
      </div>
    )
  }
}