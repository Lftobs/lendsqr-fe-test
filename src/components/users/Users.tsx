import React, { useState, useRef, useEffect }  from 'react'
import '../styles/Users.scss'
import { useNavigate, useLoaderData } from 'react-router-dom';
import moment from 'moment';
import Filter from './Filter';
import ReactPaginate from "react-paginate";
import Card from './Card';
import Modal from './Modal';
import { randomStatus, status} from '../../utils/Helpers';



const tableHead = ['Organisation', 'Username', 'Email', 'Phone Number', 'Date Added', 'Status']

type Props = {
  
}

const Users = (props: Props) => {
    const {users} = useLoaderData() as any

    const [filter, setFilter] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [modalPos, setModalPos] =  useState<number[]>([])
    const [Users, setUsers] = useState<any[]>(users)
    const [modalTop, setModalTop] =  useState<number>(0)
    const [modalLeft, setModalLeft] =  useState<number>(0)
    const [id, setId] = useState<number>(0)
    
    console.log(Users)
    // for pagination
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage: number = 9
    const endOffset = itemOffset + itemsPerPage;
    const usersRecords = Users.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Users.length / itemsPerPage);  

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % Users.length;
        setItemOffset(newOffset);
    };
    // for modal 
    const boxref = useRef<HTMLImageElement []>(new Array())
    
    const getPosition = (index: number, user_id: number) => {
       const ref = boxref.current[index]?.getBoundingClientRect()
       setId(user_id)
       setModalPos([ref.top + window.scrollY - 20, ref.right + window.screenX - 180])
       setModalTop(ref.top + window.scrollY + 5)
       setModalLeft(ref.right + window.screenX - 180)
       
    }

    const navigate = useNavigate()
    
   
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
                                    
                                    <th key={index}><div>{head} <img src="/img/icons/drop-d.svg" onClick={() => {filter ? setFilter(!filter) : setFilter (!filter)}}/></div></th>
                                )
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                        {usersRecords?.map((user: any, index: number) =>{ 
                            
                            // const userStatus = randomStatus(status)
                            // const styleClass = status[userStatus]
                            return (
                                    <tr key={user?.id}>
                                        <td onClick={() => navigate(`user-detail/${user?.id}`, {state: {data: {user}}})} >{user?.orgName}</td>
                                        <td>{`${user?.profile?.firstName} ${user?.profile?.firstName}`}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.profile?.phoneNumber}</td>
                                        <td>{moment(user?.createdAt).format('MMM D, YYYY h:mm:a')}</td>
                                        <td>
                                            <div className="status-c">
                                                <div className={`status ${status[user?.status]}`}>{user?.status}</div>
                                                <img src="/img/icons/3dot.svg"
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
                <select defaultValue={'default'}>
                    <option value='default' disabled aria-readonly>{endOffset==108? '100': endOffset}</option>
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
        <Modal top={modalTop} left={modalLeft} isModalOpen={modal} id={id} users={setUsers}/>      
                
    </article>
  )
}

export default Users
