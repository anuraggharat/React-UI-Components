import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Link to={'/components/modal'}>Modal</Link>
        <Link to={'/components/slidemodal'}>Slide Modal</Link>

    </div>
  )
}
