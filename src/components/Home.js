import React from 'react'
// import { Link } from 'react-router-dom'
// import { baseUrl } from '../config'
import HomePlants from '../components/HomePlants'

function Home() {
  // const [plant, setPlant] = React.useState([])

  // React.useEffect(() => {
  //   const getHibiscus = async () => {
  //     const res = await fetch(`${baseUrl}/plants`)
  //     const json = await res.json()
  //     setPlant(json)
  //   }
  //   getHibiscus()
  // }, [])

  return <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">        
        <div className="columns is-multiline is-mobile">
          <header>
            <div className="head-text">
              <div className="text-on-image">
                <div className="column">
                  <h3 className="title is-1 has-text-centered">...help us create a buzz</h3>
                </div>
              </div>
              <div className="head-image">           
                <div className="column is-mobile is-one-third">
                  <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1659869556/Project_Pollinator_qfrxk5-c_scale_h_350_mqijxw.png' alt="logo" />
                </div>
                <div className="column is-mobile is-full">
                  <div className ="head-image">
                    <img src = {require('../images/pexels-irina-iriser-1533470.jpg')} alt = "Bee" />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <HomePlants />
          {/* {plant.map((plant, index) => {
              return <div key={index} className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
                <Link to={`/plants/${plant.id}`}>
                  <div className="card">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-6">{plant.name}</p>
                          <p className="subtitle is-8">{plant.latinName}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-image">
                      <figure className="image is-1by1">
                        <img src={plant.image} alt={plant.name} />
                      </figure>
                    </div>
                  </div>
                </Link>
              </div>
            })} */}
        </div>
      </div>
    </div>
  </section>
}

export default Home