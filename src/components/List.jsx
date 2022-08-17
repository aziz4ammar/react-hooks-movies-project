import React from 'react'
import Dash from './Dash'

const List = ({movie,edit}) => {
  console.log(movie)
  return (
    <div className='list'>
        {movie.map(el=><Dash el={el} key={el.id} edit={edit} />)}
    </div>
  )
}

export default List