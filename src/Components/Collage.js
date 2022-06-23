import React from 'react'
import './Collage.css'
import Image, { shapes } from './Image'

function Collage() {
  return (
    <div className="collage">
      <div className="collage__grid">
        <div className="collage__tile collage__tile__1">
          <Image />
        </div>
        <div className="collage__tile collage__tile__2">
          <Image />
        </div>
        <div className="collage__tile collage__tile__3">
          <div className="collage__description">
            <div className="collage__description__header">Featured Works</div>
            <div className="collage__description__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore.
            </div>
          </div>
        </div>
        <div className="collage__tile collage__tile__4">
          <Image />
        </div>
        <div className="collage__tile collage__tile__5">
          <Image />
        </div>
        <div className="collage__tile collage__tile__6">
          <Image />
        </div>
        <div className="collage__tile collage__tile__7">
          <Image shape={shapes.ROUND_SQUARE} />
        </div>
        <div className="collage__tile collage__tile__8">
          <Image />
        </div>
        <div className="collage__tile collage__tile__9">
          <Image />
        </div>
        <div className="collage__tile collage__tile__10">
          <Image />
        </div>
      </div>
    </div>
  )
}

export default Collage
