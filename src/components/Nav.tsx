import React from 'react'
import './styles/Nav.scss'

type Props = {
    isOpen: Boolean,
    setIsOpen: (open: boolean) => void
}

const Nav = ({isOpen, setIsOpen}: Props) => {
  return (
    <>
        <header>
            <nav>
                <div className="logo-search">
                    <div className="logo"></div>
                    <div className="menu" onClick={() =>{ isOpen ? setIsOpen(false) : setIsOpen(true)}} ></div>
                    <div className="search">
                        <input type="text" name="" id="" placeholder="Search anything" />
                        <button type="button"><img src="/img/search.svg" /></button>
                    </div>
                </div>
                
                <div className="profile">
                    <small>Docs</small>
                    <img src="/img/icons/Bell.svg" alt="" className="bell" />
                    <div className="user">
                        <img src="/img/profile.svg" alt="" />
                        <div className="name">
                            <small>Ayodeji</small>
                            <img src="/img/icons/Name-arr.svg" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Nav