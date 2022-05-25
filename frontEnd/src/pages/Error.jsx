import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '100px',
      }}
    >
      <div>
        <h1>Oops! It's a dead end.</h1>
        <Link to='/'>Homepage</Link>
      </div>
    </section>
  )
}
