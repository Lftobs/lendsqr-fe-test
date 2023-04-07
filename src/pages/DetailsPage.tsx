import React from 'react'
import { useState, useEffect } from "react";
import {getDataId} from '../utils/IndexDb'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar';
import Detail from '../components/users/Detail'
import { useLocation, useParams } from 'react-router-dom';
import '../App.scss'


type Props = {}

const DetailsPage = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<Boolean>(false)
    const [userData, setUserData] = useState<any[]>([])

    const {userId} = useParams()
    //const details = useLocation()
    
    
    useEffect(() => {
        setLoading(true)
        const data = async () => {
        const details = await getDataId(`${userId}`)
        console.log(details, 'data')
        setUserData(details)
        setLoading(false)
      }
      data()
      
    }, [userId])
  
    return (
      <main>
        
        <Nav isOpen={open} setIsOpen={setOpen} />
        <section>
          <Sidebar data={open} />
          {loading? <div className="loading">loading</div> : <Detail user={userData} /> }
          
          
          
          
        </section>
       
      </main>
    )
}

export default DetailsPage

