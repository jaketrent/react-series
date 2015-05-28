import React from 'react'

import WorkshopItem from './workshop-item'

import styles from './workshop-list.css'

export default class WorkshopList extends React.Component {
  static defaultProps = {
    workshops: []
  }
  renderItem(item) {
    return <WorkshopItem workshop={item} />
  }
  renderItems(items) {
    return items.map(this.renderItem)
  }
  render() {
    return (
      <ul className={styles.list}>
        {this.renderItems(this.props.workshops)}
      </ul>
    )
  }
}