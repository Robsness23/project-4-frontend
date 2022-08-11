import React from 'react'
import Plant from '../components/Plant'
import { baseUrl } from '../config'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};

function NectarPlants() {

  const [cherry, setCherry] = React.useState([])
  const [verbena, setVerbena] = React.useState([])
  const [dahlia, setDahlia] = React.useState([])
  const [lavender, setLavender] = React.useState([])

  React.useEffect(() => {
    const getCherry = async () => {
      const res = await fetch(`${baseUrl}/plants/17`)
      const json = await res.json()
      setCherry(json)
    }
    getCherry()
  }, [])
  console.log(cherry)

  React.useEffect(() => {
    const getVerbena = async () => {
      const res = await fetch(`${baseUrl}/plants/14`)
      const json = await res.json()
      setVerbena(json)
    }
    getVerbena()
  }, [])

  React.useEffect(() => {
    const getDahlia = async () => {
      const res = await fetch(`${baseUrl}/plants/16`)
      const json = await res.json()
      setDahlia(json)
    }
    getDahlia()
  }, [])

  React.useEffect(() => {
    const getLavender = async () => {
      const res = await fetch(`${baseUrl}/plants/1`)
      const json = await res.json()
      setLavender(json)
    }
    getLavender()
  }, [])

  return (  
    <Carousel autoPlay
      responsive={responsive}   
    >
      <section className="section">
        <div className="container">        
          <div className="columns is-mobile">
            {cherry ? (            
              <Plant
                id={cherry.id}
                name={cherry.name}                   
                image={cherry.image}
              />
            ) : (
              <p>Loading plant...</p>
            )}
            {verbena ? (
              <Plant
                id={verbena.id}
                name={verbena.name}
                image={verbena.image}
              />
            ) : (
              <p>Loading plant...</p>
            )}
            {dahlia ? (
              <Plant
                id={dahlia.id}
                name={dahlia.name}
                image={dahlia.image}
              />
            ) : (
              <p>Loading plant...</p>
            )}
            {lavender ? (
              <Plant
                id={lavender.id}
                name={lavender.name}
                image={lavender.image}
              />
            ) : (
              <p>Loading plant...</p>
            )}
                   
          </div>   
         
        </div>
      </section>
    </Carousel> 
    
  )


}

export default NectarPlants