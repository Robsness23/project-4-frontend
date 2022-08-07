import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'
import { baseUrl } from "../config"
import seasonTypes from '../data/seasonTypes'
import pollinatorTypes from '../data/pollinatorTypes'


function HiveMind() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    latinName: "",
    description: "",
    seasons: [],
    pollinators: [],
    image: "",
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  // function handleSelectSeason(event){
  //   console.log(event)
  //   event.map(season => season.value)

  // const value = event.value
  // console.log(value)

  // }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newFormData = {
      // this gave me major grief, using React Select, I have to give the types as data from front end (found in pollinatorTypes & seasonTypes),
      // The format I was trying to give it and save to the db was incorrect. Basically when a user selects a pollinator or season in front end,
      // it is an event and I needed to actually get the value of the selected pollinator and season. I was trying to map through the seasons season 
      // and pollinators type like in the below commented out lines, but not noticing that I actually needed the value from the event 
      // and not just the value, but the structure that my db would accept (an array with an object that had a type and season)
      ...formData,

      // ? The code that kept erroring and trying to store incorrect format and value to my db
      // pollinators: formData.pollinators.map(pollinator => pollinator.type)
      // seasons : formData.seasons.map(season => season.season)

      // ! The code that actually worked 
      // I am mapping through the seasons array and returning the season value, in an object, which the user selects in the front end. This successfully 
      // saves into my db as it follows my model design
      seasons: formData.seasons.map(season => { 
        return { season: season.value }
      }),
      // I am mapping through my pollinators array and returning the type value, in an object.
      pollinators: formData.pollinators.map(pollinator => {
        return { type: pollinator.value }
      }),

      // ? How my Insomnia was accepting the post data
      // "pollinators": [
      //   {
      //     "type": "Hoverfly",
      //   },
      //   {
      //     "type": "Butterfly",
      //   }
      // ],
      // "seasons": [
      //   {
      //     "season": "Summer",			
      //   }
      // ],
    }

    try {
      const { data } = await axios.post(`${baseUrl}/plants`, newFormData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data.id)
      navigate(`/plants/${data.id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          {['name', 'latinName', 'description', "image"].map(field => {
            return <div key={field} className="field">
              <label className="label">
                {field[0].toUpperCase() + field.slice(1)}
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={formData[field]}
                  onChange={handleChange}
                  name={field}
                />
              </div>
            </div>
          })}
          <label className="label">
            {'Flowering Season'}
          </label>
          <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={seasonTypes}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(seasons) => setFormData({ ...formData, seasons })}
            value={formData.seasons}
          />
          <label className="label">
            {'Attracts'}
          </label>
          <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={pollinatorTypes}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(pollinators) => setFormData({ ...formData, pollinators })}
            value={formData.pollinators}
          />

          <button className="button mt-5 is-success">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default HiveMind