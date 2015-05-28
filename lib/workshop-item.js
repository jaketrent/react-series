import React from 'react'

export default class WorkshopItem extends React.Component {
  static propTypes  = {
    workshop: React.PropTypes.object.isRequired
  }
  render() {
    return (
      <li>
        {this.props.workshop.title}
      </li>
    )
  }
}