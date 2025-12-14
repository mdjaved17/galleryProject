import React from 'react'

function Card(props) {
  return (
    <div>
          <img
            className="h-52 w-full object-cover rounded-md"
            src={props.elem.download_url}
            alt=""
          />
          <h3 className="text-white font-semibold text-l">{props.elem.author}</h3>
        </div>
  )
}

export default Card