import React from 'react'

interface IProps {
  nombre: string
}

const Regalo = ({nombre}:IProps) => {
  return (
    <div>
      <p style={{margin: '.3rem 0'}}>{nombre}</p>
    </div>
  )
}

export default Regalo