import React from 'react'
import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa'
import { useColors } from '../hooks'

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors()
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, background: color }} />
      <StarRating selectedStars={rating} onRate={(newRating) => rateColor(id, newRating)} />
    </section>
  )
}
