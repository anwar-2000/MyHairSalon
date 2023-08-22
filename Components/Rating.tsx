'use client'

import { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'

export function Rating({value}:{value:number}) {
  const [rating, setRating] = useState<number>(value || 0)

  return <ReactRating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
}