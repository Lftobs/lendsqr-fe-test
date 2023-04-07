import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import './App.scss'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar';
import Users from './components/users/Users';
import { initDB, fillDb, getData } from "./utils/IndexDb";


function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [users, setusers] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const getAll = async () => {
      await initDB()
      fillDb('test')
      const allUsers = await getData('test')
      setusers((prevState) => prevState = allUsers)
    }
    
    getAll()
    setLoading(false)
  }, [])
  return (
    <main>
      
      <Nav isOpen={open} setIsOpen={setOpen} />
      <section>
        <Sidebar data={open} />
        {loading? <div>Loading</div> : <Users  Users={users} />}
      </section>
      <Outlet />
    </main>
  )
}

export default App
