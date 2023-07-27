import { useState, createContext } from 'react'
import { Outlet } from 'react-router-dom';
import InfoModal from '../components/InfoModal';
import Nav from "../components/Nav";
import Sidebar from '../components/Sidebar';
import { msgContext } from '../utils/Helpers';




type Props = {}


const Layout = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const [users, setusers] = useState<any[]>([])
    const [msg, setMsg] = useState<string>('ihh')
    const [isMsg, setIsMsg] = useState<boolean>(false)
    const [msgStatus, setMsgStatus] = useState<string>('')
    //const [loading, setLoading] = useState<Boolean>(true)
    const addMsg = (info: string) => {
      setMsg(info)
    }
  
  
  
    return (
      <main>
        <Nav isOpen={open} setIsOpen={setOpen} />
        <msgContext.Provider value={{ msg, setMsg, isMsg, setIsMsg, msgStatus, setMsgStatus}}>
          <section>
            <Sidebar data={open} />
            <Outlet />
          </section>
        
          <InfoModal />
        </msgContext.Provider>
      </main>
  )
}

export default Layout