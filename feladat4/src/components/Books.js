import React from 'react'

const Books = ({book, price}) => {
  return (
    <div className='bookContainer'>
        <h3>Név: {book}</h3>
        <p>Ár: {price}</p>
    </div>
  )
}

export default Books