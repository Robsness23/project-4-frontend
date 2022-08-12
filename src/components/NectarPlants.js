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

  const [thyme, setThyme] = React.useState([])
  const [rose, setRose] = React.useState([])  
  const [dahlia, setDahlia] = React.useState([])
  const [chive, setChive] = React.useState([])

  React.useEffect(() => {
    const getThyme = async () => {
      const res = await fetch(`${baseUrl}/plants/2`)
      const json = await res.json()
      setThyme(json)
    }
    getThyme()
  }, [])

  React.useEffect(() => {
    const getRose = async () => {
      const res = await fetch(`${baseUrl}/plants/23`)
      const json = await res.json()
      setRose(json)
    }
    getRose()
  }, [])
  console.log(rose)

  React.useEffect(() => {
    const getDahlia = async () => {
      const res = await fetch(`${baseUrl}/plants/19`)
      const json = await res.json()
      setDahlia(json)
    }
    getDahlia()
  }, [])

  React.useEffect(() => {
    const getChive = async () => {
      const res = await fetch(`${baseUrl}/plants/17`)
      const json = await res.json()
      setChive(json)
    }
    getChive()
  }, [])

  return (  
    <Carousel autoPlay
      responsive={responsive}   
    >
      <section className="section">
        <div className="container">        
          <div className="columns is-mobile">
            {rose ? (            
              <Plant
                id={rose.id}
                name={rose.name}                   
                image={rose.image}
              />
            ) : (
              <p>Loading plant...</p>
            )}
            {thyme ? (
              <Plant
                id={thyme.id}
                name={thyme.name}
                image={thyme.image}
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
            {chive ? (
              <Plant
                id={chive.id}
                name={chive.name}
                image={chive.image}
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