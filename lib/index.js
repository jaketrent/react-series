import React from 'react'

import WorkshopList from './workshop-list'

import * as store from './workshops-store'

import styles from './index.css'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>React Series</h1>
        <WorkshopList workshops={store.getWorkshops()} />
      </div>
    )
  }
}