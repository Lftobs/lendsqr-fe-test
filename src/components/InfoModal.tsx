import React, { useContext } from 'react'
import { msgContext } from '../utils/Helpers'
import type { msgContextType } from '../utils/Helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faXmark} from '@fortawesome/free-solid-svg-icons'


type Props = {}

const InfoModal = (props: Props) => {
    const message = useContext(msgContext)
    
    return (
        <div className={`message ${message?.msgStatus}`} data-open={message?.isMsg}>
            <FontAwesomeIcon icon={faCircleInfo} className="s1"/>
            <span> 
                {message?.msg}
            </span>
            <FontAwesomeIcon icon={faXmark} className="s2" onClick={() => message?.setIsMsg(false)}/>
        </div>
  )
}

export default InfoModal