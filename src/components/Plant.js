import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config'

function Plant({ name, image, id }) {
  const [plant, setPlant] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/plants`)
      const json = await res.json()
      setPlant(json)
    }
    getData()
  }, [])

  return ( 
    <div className="column is-one-quarter-desktop is-third-tablet is-half-mobile">  
      <Link to={`/plants/${plant.id}`}>   
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={image} alt={name} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Plant