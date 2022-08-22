import React from 'react'
import { Link, useParams } from 'react-router-dom'
const More = ({movie}) => {
  const params =useParams()
  console.log(params)
  const salah = movie.find(el=>el.id==params.id) 
  console.log(salah)
  return (
    <div>
      {salah.desc}
      <Link to={`/`}>
      <button>Back to home</button>
      </Link>
    </div>
  )
}

export default More