import React from 'react'

const Dash = ({el}) => {
  return (
    <div>
        <div>
            {el.image},
            {el.name},
            {el.date},
            {el.rating};
        </div>
    </div>
  )
}

export default Dash