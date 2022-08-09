import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Login() {
  
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  })

  const [errors, setErrors] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    setErrors(false)
  }

  const notify = () => toast()

  async function handleSubmit(e) {
    e.preventDefault()
    try {      
      const { data } = await axios.post(`${baseUrl}/login`, formData)
      console.log(data)
      console.log(formData)
      localStorage.setItem('token', data.token)
      localStorage.setItem('email', data.email)
      toast("You have successfully logged in", {
        className: "toast-success",
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
      })
      setTimeout(() => {
        navigate('/');
      }, "1500")
      
    } catch (error) {
      toast("Login Failed", {
        className: "toast-error",
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
      })
      setErrors(true)
      console.log(error.response.data)
    }
  }
  

  return <div className="section">
    <h2 className="title is-2 has-text-centered">
      Login
    </h2>
    <div className ="logo-image">
      <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1659869556/Project_Pollinator_qfrxk5-c_scale_h_350_mqijxw.png' alt="logo" />
    </div>
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={'email'}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={'password'}
                value={formData.password}
                onChange={handleChange}
              />
              {errors && <small className="text-has-text">{"Nah, something is wrong!"}</small>}
            </div>
          </div>
          <div>
            <button className="button" onClick={notify}>Login</button>
            <ToastContainer 
              position="top-center"
              autoClose={1900}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />            
          </div>
        </form>
      </div>
    </div>
  </div>
  
}