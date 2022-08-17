import React from 'react'
import Dash from './Dash'

const List = ({movie}) => {
  console.log(movie)
  return (
    <div className='list'>
        {movie.map(el=><Dash el={el} key={el.id} />)}
    </div>
  )
}

export default List