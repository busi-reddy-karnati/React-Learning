import React from 'react'
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'
const Icon = ({ name }) => {
  switch (name) {
    case 'empty':
      return <FaPen className="icon"></FaPen>

    case 'circle':
      return <FaRegCircle className="icon"></FaRegCircle>

    default:
      return <FaTimes className="icon"></FaTimes>
  }
}

export default Icon
