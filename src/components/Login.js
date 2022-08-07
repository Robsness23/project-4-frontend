import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config'


export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  })
  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${baseUrl}/login`, formData)
      console.log(data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('email', data.email)
      navigate('/')
      alert("You have successfully logged in")
    } catch (err) {
      console.log(err.response.data)
      alert("Login failed")
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
            </div>
          </div>
          <button className="button">Login</button>
        </form>
      </div>
    </div>
  </div>
  
}