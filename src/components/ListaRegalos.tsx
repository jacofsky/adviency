import React from 'react'
import { IRegalo } from '../interfaces/Regalo'
import Regalo from './Regalo'

interface IProps {
    regalos: IRegalo[]
}

const ListaRegalos = ({regalos}:IProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
        {
            regalos.map(({id, nombre}) => <Regalo key={id} nombre={nombre}/>)
        }
    </div>
  )
}

export default ListaRegalos