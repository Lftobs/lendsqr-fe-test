import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="users-info">
        <div className="users-no">
            <figure><img src="/img/icons/iconUi.svg" alt="" /></figure>
            <h3>Users</h3>
            <h2>2,453</h2>
        </div>
        <div className="active">
            <figure><img src="/img/icons/iconUi-1.svg" alt="" /></figure>
            <h3>Active Users</h3>
            <h2>2,453</h2>
        </div>
        <div className="loan">
            <figure><img src="/img/icons/iconUi-2.svg" alt="" /></figure>
            <h3>Users with loan</h3>
            <h2>12,453</h2>
        </div>
        <div className="savings">
            <figure><img src="/img/icons/iconUi3.svg" alt="" /></figure>
            <h3>Users with savings</h3>
            <h2>102,453</h2>
        </div>
    </div>
  )
}

export default Card