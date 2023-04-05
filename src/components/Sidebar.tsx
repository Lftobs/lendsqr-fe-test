import React from 'react'
import './styles/Sidebar.scss'

type Props = {
    data: boolean
}

function Sidebar({data}: Props) {
  return (
    <nav className="side-bar" data-open={data}>
                <ul>
                    <li>
                        <figure><img src="/img/icons/briefcase 1.svg" alt=""  /></figure>
                        <figcaption className="w">
                          Switch organisation 
                          <img src="" alt="" />
                        </figcaption>
                    </li>
                    <li className="li-1">
                        <figure><img src="/img/home.svg" alt="" /></figure>
                        <figcaption className="fig-cap">Dashboard</figcaption>
                    </li>
                    <h4 className="title">CUSTOMERS</h4>
                    <li className='active'>
                        <figure>
                            <img src="/img/user-friends 1.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Users</figcaption>
                    </li>
                    <li>
                        <figure><img src="/img/icons/users 1.svg" alt=""/></figure>
                        <figcaption className="fig-cap">Guarantors</figcaption>
                    </li>
                    <li>
                        <figure><img src="/img/icons/VectorLoan.svg" alt=""/></figure>
                        <figcaption className="fig-cap">Loans</figcaption>
                    </li>
                    <li>
                        <figure><img src="/img/icons/model.svg" alt="" /></figure>
                        <figcaption className="fig-cap">Decision Models</figcaption>
                    </li>
                    <li>
                        <figure><img src="/img/icons/piggy-bank 1.svg" alt=""/></figure>
                        <figcaption className="fig-cap">Savings</figcaption>
                    </li>
                    <li>
                        <figure><img src="/img/icons/loan-r.svg" alt="" /></figure>
                        <figcaption className="fig-cap">Loan Request</figcaption>
                    </li>
                    <li>
                        <figure><img src="/img/icons/user-check.svg" alt="" /></figure>
                        <figcaption className="fig-cap">Whitelist</figcaption>
                    </li>
                    <li>
                        <figure><img src="/img/icons/user-times.svg" alt="" /></figure>
                        <figcaption className="fig-cap">Karma</figcaption>
                    </li>
                    <h4>BUSINESSES</h4>
                    <li>
                        <figure>
                            <img src="/img/icons/users 1.svg" alt=""/>
                        </figure>
                        <figcaption className="fig-cap">Organisation</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/loan-p.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Loan Products</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/saving-p.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Savings Product</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/coins.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Fees and Charges</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/transactions.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Transactions</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/services.svg" alt=""/>
                        </figure>
                        <figcaption className="fig-cap">Services</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/user-cog 1ser-acc.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Service account</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/scroll.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Settlement</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/chart-bar.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Report</figcaption>
                    </li>
                    <h4>SETTINGS</h4>
                    <li>
                        <figure>
                            <img src="/img/icons/prefer.svg" alt=""/>
                        </figure>
                        <figcaption className="fig-cap">Preferences</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/percent.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Fees and Pricing</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/audit.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Audit Log</figcaption>
                    </li>
                    <li>
                        <figure>
                            <img src="/img/icons/Sys-m.svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">System Management</figcaption>
                    </li>
                    
                    <div className="buttom">
                        <li>
                        <figure>
                            <img src="/img/icons/Logout .svg" alt="" />
                        </figure>
                        <figcaption className="fig-cap">Log out</figcaption>
                    </li>
                    <h3>V1.0.2</h3>
                    </div>
                    
                </ul>
            </nav>
  )
}

export default Sidebar