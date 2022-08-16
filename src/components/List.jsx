import React from 'react'
import Dash from './Dash'

const List = (movie) => {
  return (
    <div>
        {movie.map(el=><Dash el={el} />)}
    </div>
  )
}

export default List