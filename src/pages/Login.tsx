import './styles/Login.scss'
import { useState } from 'react'
import React from 'react'

type Props = {}

export default function Login({}: Props) {
    const [show, setShow] = useState<string>("password")
    
    return (
    <main className="main1">
       <header className="header1">
            <div className="logo">
                <img src="/img/logo.svg" alt="" />
            </div>
        </header>
        <section className="section1">
            <div className="login-img">
                <img src="/img/sign-in.svg" alt="" />
            </div>
            <form className="form1" action='/'>
                <h2>Welcome!</h2>
                <p>Enter details to login</p>
                <input type="email" name="" id="" placeholder="Email" />
                <span>
                    <input type={show} name="" id="" placeholder="Password" />
                    <button className="pswd-btn" type="button" onClick={() => {
                        show == "password" ? setShow('text') : setShow('password')
                    }} >
                        {show == 'password' ? 'show' : 'hide'}</button>
                </span>
                    <small>FORGOT PASSWORD</small>
                <button type="submit">LOG IN</button>
            </form>
        </section>
            
    </main>
  )
}

