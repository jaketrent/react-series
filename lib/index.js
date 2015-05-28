import React from 'react'

import WorkshopList from './workshop-list'

import * as store from './workshops-store'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Series</h1>
        <WorkshopList workshops={store.getWorkshops()} />
      </div>
    )
  }
}