import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { msgContext } from '../../utils/Helpers'
import { updateStatus } from '../../utils/IndexDb'

type Props = {
  top: number,
  left: number,
  isModalOpen: boolean,
  id: number,
  users: (Users: any[]) => void
}

const Modal = ({top, left, isModalOpen, id, users}: Props) => {
  const styletop = {
    top: `${top}px`,
    left: `${left}px`
  } as const
  
  const messages = useContext(msgContext)

  const setInfo = (status: string) => {
    setTimeout(() => {
      messages?.setIsMsg(true) 
      messages?.setMsg(`User status has been set to ${status}`) 
      messages?.setMsgStatus(status)
      setTimeout(() => {
      messages?.setIsMsg(false)
      }, 7000);
    }, 2000)
  }

  return (
    <div className="modal" style={styletop} data-open={isModalOpen}>
        <Link to={`/user-detail/${id}`} className="m-content">
            <img src="/img/icons/Eye.svg" alt="" />
            View details
        </Link>
        <div className="m-content" onClick={async () => {
         await updateStatus(`${id}`, 'Active', users)
         setInfo('Active')
         
         }
        }>
            <img src="/img/icons/user-check.svg" alt="" />
            Activate user
        </div>
        <div className="m-content" onClick={() => {
          updateStatus(`${id}`, 'Blacklist', users)
          messages?.setIsMsg(true) 
          messages?.setMsg(`User status has been set to Blacklist`) 
          messages?.setMsgStatus('Blacklist')
          setTimeout(() => {
           messages?.setIsMsg(false)
          }, 7000);
        }
        } >
            <img src="/img/icons/user-times.svg" alt="" />
            Blacklist user
        </div>
    </div>
  )
}

export default Modal