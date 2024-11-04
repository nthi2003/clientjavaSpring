import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const Home = () => {
    const [users, setUsers] = useState([])
    const {id} = useParams();
    useEffect(() => {

        loadUsers()
    }, [])
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/getUsers")
        setUsers(result.data)
    }
    const deleteUser = async(id) => {
       
        await axios.delete(`http://localhost:8080/deleteUser/${id}`);
        loadUsers();
    }
  
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">password</th>
                            <th scope="col">Action</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr className='text-center'>
                                    <th scope="row" key={index}>{user.id}</th>
                
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <Link to={`/edit/${user.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
