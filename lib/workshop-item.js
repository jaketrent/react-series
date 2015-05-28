import assign from 'lodash/object/assign'
import omit from 'lodash/object/omit'

import React from 'react'

import store from './workshops-store'

class WorkshopVm {
  constructor(workshopData) {
    this.data = workshopData
    assign(this, omit(this.data, 'links'))
  }
  hasLink(key) {
    return !!(this.data.links && this.data.links[key])
  }
  hasImageUrl() {
    return this.hasLink('imageUrl')
  }
  imageUrl() {
    if (this.hasImageUrl())
      return this.data.links.imageUrl
  }
  hasVideoUrl() {
    return this.hasLink('videoUrl')
  }
  videoUrl() {
    if (this.hasVideoUrl())
      return this.data.links.videoUrl
  }
  hasSlidesUrl() {
    return this.hasLink('slidesUrl')
  }
  slidesUrl() {
    if (this.hasSlidesUrl())
      return this.data.links.slidesUrl
  }
}

export default class WorkshopItem extends React.Component {
  static propTypes  = {
    workshop: React.PropTypes.object.isRequired
  }
  renderImage(workshop) {
    var img = workshop.hasImageUrl() ?
      <img src={workshop.imageUrl()} alt={workshop.title} /> : null
    return <div children={img} />
  }
  renderVideo(workshop) {
    if (workshop.hasVideoUrl())
      return <a href={workshop.videoUrl()}>Recording</a>
    else
      return <span>Sorry, no recording. :(</span>
  }
  renderSlides(workshop) {
    if (workshop.hasSlidesUrl())
      return <a href={workshop.slidesUrl()}>Slides</a>
  }
  render() {
    var workshop = new WorkshopVm(this.props.workshop)
    return (
      <li>
        {this.renderImage(workshop)}
        <h2>{workshop.title}</h2>
        <h3>{workshop.subtitle}</h3>
        <p>{workshop.desc}</p>
        {this.renderVideo(workshop)}
        {this.renderSlides(workshop)}
      </li>
    )
  }
}