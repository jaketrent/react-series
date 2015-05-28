import assign from 'lodash/object/assign'
import omit from 'lodash/object/omit'

import React from 'react'

import store from './workshops-store'

import styles from './workshop-item.css'

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
      <img className={styles.image} src={workshop.imageUrl()} alt={workshop.title} /> : null
    return <div className={styles.imageFrame} children={img} />
  }
  renderVideo(workshop) {
    if (workshop.hasVideoUrl())
      return <a className={styles.linksItem} href={workshop.videoUrl()}>Recording</a>
    else
      return <span className={styles.linksItem}>/Recording MIA/</span>
  }
  renderSlides(workshop) {
    if (workshop.hasSlidesUrl())
      return <a className={styles.linksItem} href={workshop.slidesUrl()}>Slides</a>
  }
  render() {
    var workshop = new WorkshopVm(this.props.workshop)
    return (
      <article className={styles.item}>
          <header className={styles.header}>
          {this.renderImage(workshop)}
        </header>
        <main className={styles.body}>
          <h2 className={styles.title}>{workshop.title}</h2>
          <h3 className={styles.subtitle}>{workshop.subtitle}</h3>
          <p className={styles.desc}>{workshop.desc}</p>
          <nav className={styles.linksList}>
            {this.renderVideo(workshop)}
            {this.renderSlides(workshop)}
          </nav>
        </main>
      </article>
    )
  }
}