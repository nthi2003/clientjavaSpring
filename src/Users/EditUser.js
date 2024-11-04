import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    let navigate = useNavigate()
    const [user , setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const {id} = useParams();
    const{username , email, password} =user

    const InputChange = (e) => {
        setUser({...user ,[e.target.name]: e.target.value})

    }
    
    const onSubmit = async(e) => {
        e.preventDefault()
        await axios.put(`http://localhost:8080/updateUser/${id}`, user)
        navigate("/")

    }
    useEffect(() => {

        loadUser()
    }, [])
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/getUser/${id}`)
        setUser(result.data)
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 text-center'>
            <h2 className='text-center m-4'>
                Edit
            </h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label' >
                    Username
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your username' name="username" value={username} onChange={(e) => InputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label' >
                    Email
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your email' name="email" value={email} onChange={(e) => InputChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label' >
                    password
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your password' name="password" value={password} onChange={(e) => InputChange(e)}/>
            </div>
            <button tyoe="submit" className='btn btn-outline-primary '>submit</button>
            <Link tyoe="submit" className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default EditUser
