import React, { useState, useRef, useEffect }  from 'react'
import '../styles/Users.scss'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Filter from './Filter';
import ReactPaginate from "react-paginate";
import Card from './Card';
import Modal from './Modal';
import { randomStatus, status} from '../../utils/Helpers';



const tableHead = ['Organisation', 'Username', 'Email', 'Phone Number', 'Date Added', 'Status']


type Props = {
    Users: any[],
}

const Users = ({Users}: Props) => {
    const [filter, setFilter] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [modalTop, setModalTop] =  useState<number>(0)
    const [modalLeft, setModalLeft] =  useState<number>(0)
    const [id, setId] = useState<number>(0)
    
    // for pagination
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage: number = 9
    const endOffset = itemOffset + itemsPerPage;
    const usersRecords = Users.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Users.length / itemsPerPage);

    const usersStatus = JSON.stringify(status)

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % Users.length;
        setItemOffset(newOffset);
    };
    // for modal 
    const boxref = useRef<HTMLImageElement []>(new Array())
    
    const getPosition = (index: number, user_id: number) => {
       const ref = boxref.current[index]?.getBoundingClientRect()
       setId(user_id)
       setModalTop(ref.top + window.scrollY - 20)
       setModalLeft(ref.right + window.screenX - 180)
       
    }

    const navigate = useNavigate()

    useEffect(() => {
        
    }, [])
   
    return (
    <article>
        <h2>Users</h2>
        <Card />
                
        <div className='table-sec'>
            <div className="table">
                <table cellSpacing="2">
                    <thead>
                        <tr>
                            {tableHead.map((head, index) => 
                                    
                                    <th><div>{head} <img src="/img/icons/drop-d.svg" onClick={() => {filter ? setFilter(!filter) : setFilter (!filter)}}/></div></th>
                                )
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                        {usersRecords?.map((user, index) =>{ 
                            //type key = keyof typeof status
                            const userStatus = randomStatus(status)
                            const styleClass = status[userStatus]
                            return (
                                    <tr>
                                        <td onClick={() => navigate(`user-detail/${user?.id}`, {state: {data: {user}}})} >{user?.orgName}</td>
                                        <td>{`${user?.profile?.firstName} ${user?.profile?.firstName}`}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.profile?.phoneNumber}</td>
                                        <td>{moment(user?.createdAt).format('MMM D, YYYY h:mm:a')}</td>
                                        <td>
                                            <div className="status-c">
                                                <div className={`status ${styleClass}`}>{userStatus}</div>
                                                <img src="img/icons/3dot.svg"
                                                    alt="3-vertical dot icon"
                                                    key={user?.id}  
                                                    ref={(element) => boxref.current[index] = element!} 
                                                    onClick={() =>{ 
                                                            modal? setModal(!modal) : setModal(!modal) 
                                                            getPosition(index, user?.id)
                                                        }
                                                    }
                                                />   
                                            </div>
                                        </td>
                                    </tr>
                                    )
                                }
                            )
                        }

                        
                    </tbody>

                </table>
                    
            </div>
            
            <Filter  filter={filter}/>
        </div>
        <div className="paginate">
            <div className="show">
                showing 
                <select>
                    <option selected aria-readonly>{endOffset==108? '100': endOffset}</option>
                </select>
                out of 100
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={
                    <div className="p-btn">
                        <img src="/img/icons/VectorRight .svg "/>
                    </div>
                }
                pageClassName='pages'
                pageLinkClassName='page-link'
                previousClassName='prev'
                nextClassName='next'
                containerClassName='paginator'
                activeClassName='active'
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel={
                    <div className="p-btn">
                        <img src="/img/icons/Arrleft.svg "/>
                    </div>
                }
                renderOnZeroPageCount={null}
            />
               

        </div>
        <Modal top={modalTop} left={modalLeft} isModalOpen={modal} id={id}/>      
                
    </article>
  )
}

export default Users
