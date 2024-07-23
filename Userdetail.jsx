import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'
import { useParams } from 'react-router-dom'

const Userdetail = () => {

const{id}=useParams();

  const { data, setData } =useContext(UserContext)
  return (
    <div>
      {data[id-1].name}
    </div>
  )
}

export default Userdetail
