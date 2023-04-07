import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Detail.scss'
import { randomItem, relationship, residence} from '../../utils/Helpers';



type Props = {
  user: any
}

const Detail = ({user}: Props) => {
  return (
        <article className="details-art">
          <div className="pdp">
            <Link to='/'>
            <img src="/img/icons/Vectorarr.svg" alt="" />
            <h4>Back to Users</h4>
            </Link>
          </div>
          <div className="top">
              <h2>User Details</h2>
              <div className="buttons">
                  <button className='btn'>Blacklist User</button>
                  <button className='btn'>Activate user</button>
              </div>
          </div>

          <div className="details">
            <div className="profile-top">
                <div className="name">
                    <figure>
                        <img src={user?.profile?.avatar} alt="" />
                    </figure>
                    <div>
                        <h2>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</h2>
                        <small>Lendsqr2gig</small>
                    </div>
                    
                </div>
                <div className="tier">
                  <h3>User's tiers</h3>
                  <div className="stars">
                      <figure><img src="/img/icons/Vectorstar.svg" alt="" /></figure>
                      <figure><img src="/img/icons/Vectorstar1.svg" alt="" /></figure>
                      <figure><img src="/img/icons/Vectorstar1.svg" alt="" /></figure>
                  </div>
                </div>
                        
                <div className="acc">
                  <h2>{user?.profile?.currency}{user?.accountBalance}</h2>
                  <small>{user?.accountNumber} / Providus Bank</small>
                </div>
            </div>
            <ul>
              <li className="active">General details</li>
              <li>Documents</li>
              <li>Bank Details</li>
              <li>Loans</li>
              <li>Savings</li>
              <li>Apps and System</li>
            </ul>
          </div>

          <div className="user-details">
            <div className="personal">
              <h3 className="h3">Personal Information</h3>
              <div className="p-details">
                <div>
                  <h4>Full name</h4>
                  <h3>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</h3>
                </div>
                <div className="">
                  <h4>Phone number</h4>
                  <h3>{user?.profile?.phoneNumber}</h3>
                </div>
                <div className="">
                  <h4>Email address</h4>
                  <h3>{user?.email}</h3>
                </div>
                <div className="">
                  <h4>Bvn</h4>
                  <h3>{user?.profile?.bvn}</h3>
                </div>
                <div className="">
                  <h4>Gender</h4>
                  <h3>{user?.profile?.gender}</h3>
                </div>
                <div className="">
                  <h4>Marital status</h4>
                  <h3>Single</h3>
                </div>
                <div className="">
                  <h4>Children</h4>
                  <h3>None</h3>
                </div>
                <div className="">
                  <h4>Type of residence</h4>
                  <h3>{randomItem(residence)}</h3>
                </div>
              </div>
            </div>

            <div className="personal">
              <h3 className="h3">Education and Employment</h3>
              <div className="p-details">
                <div>
                  <h4>Level of Education</h4>
                  <h3>{user?.education?.level}</h3>
                </div>
                <div className="">
                  <h4>Employment Status</h4>
                  <h3>{user?.education?.employmentStatus}</h3>
                </div>
                <div className="">
                  <h4>Sector of Employment</h4>
                  <h3>{user?.education?.sector}</h3>
                </div>
                <div className="">
                  <h4>Duration of employment</h4>
                  <h3>{user?.education?.duration}</h3>
                </div>
                <div className="">
                  <h4>Office email</h4>
                  <h3>{user?.education?.officeEmail}</h3>
                </div>
                <div className="">
                  <h4>Monthly income</h4>
                  <h3>{`${user?.profile?.currency}${user?.education?.monthlyIncome[0]}-${user?.profile?.currency}${user?.education?.monthlyIncome[1]} `}</h3>
                </div>
                <div className="">
                  <h4>Loan repayment</h4>
                  <h3>{user?.education?.loanRepayment}</h3>
                </div>       
              </div>           
            </div>

            <div className="personal">
              <h3 className="h3">Socials</h3>
              <div className="p-details">
                <div>
                    <h4>Twitter</h4>
                    <h3>{user?.socials?.twitter}</h3>
                </div>
                <div className="">
                    <h4>Facebook</h4>
                    <h3>{user?.socials?.facebook}</h3>
                </div>
                <div className="">
                    <h4>Instagram</h4>
                    <h3>{user?.socials?.instagram}</h3>
                </div>   
              </div>
            </div>

            <div className="personal last-p">
              <h3 className="h3">Guarantor</h3>
              <div className="p-details last">
                  <div>
                      <h4>Full name</h4>
                      <h3>{`${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`}</h3>
                  </div>
                  <div className="">
                      <h4>Phone number</h4>
                      <h3>{user?.guarantor?.phoneNumber}</h3>
                  </div>
                  <div className="">
                      <h4>address</h4>
                      <h3>{user?.guarantor?.address}</h3>
                  </div>
                  <div className="">
                      <h4>Relationship</h4>
                      <h3>{randomItem(relationship)}</h3>
                  </div>
                            
              </div>
          </div>


          </div>


        </article>
  )
}

export default Detail
