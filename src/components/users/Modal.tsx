import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  top: number,
  left: number,
  isModalOpen: boolean,
  id: number
}

const Modal = ({top, left, isModalOpen, id}: Props) => {
  const styletop = {
    top: `${top}px`,
    left: `${left}px`
  } as const

  return (
    <div className="modal" style={styletop} data-open={isModalOpen}>
        <Link to={`user-detail/${id}`} className="m-content">
            <img src="/img/icons/Eye.svg" alt="" />
            View details
        </Link>
        <div className="m-content">
            <img src="/img/icons/user-check.svg" alt="" />
            Activate user
        </div>
        <div className="m-content">
            <img src="/img/icons/user-times.svg" alt="" />
            Blacklist user
        </div>
    </div>
  )
}

export default Modal