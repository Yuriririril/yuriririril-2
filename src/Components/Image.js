import React from 'react'
import './Image.css'

export const shapes = {
  SQUARE: "SQUARE",
  CIRCLE: "CIRCLE",
  ROUND_SQUARE: "ROUND-SQUARE"
}

const getShapeClassName = (shape) => {
  var baseClassName = "image"

  switch (shape) {
    case shapes.SQUARE: return ""
    case shapes.CIRCLE: return `${baseClassName}__circle`
    case shapes.ROUND_SQUARE: return `${baseClassName}__roundSquare`
    default: return ""
  }
}

function Image({shape = shapes.SQUARE}) {
  return (
    <div className={`image ${getShapeClassName(shape)}`}>
      
    </div>
  )
}

export default Image
