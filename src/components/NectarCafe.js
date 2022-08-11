import React from 'react'
import NectarPlants from './NectarPlants'

function NectarCafe() {

  return <div className="section">
    <h2 className="title is-2 has-text-centered">
      Nectar Cafe
    </h2> 
  

    <div className="section">
      <h3 className="title is-4 has-text-centered">Designing your Cafe</h3>
      <div>      
        <p className="subtitle is-6 has-text-centered">Choose a sheltered sunny spot <br />
        Place each plant in groups or drifts so that the colour and scent are easy to detect <br />
        Prolong the flowering season: select plants so that you have a show of flowers from early spring to late autumn <br />
        Flowers with a simple (often flat) structure, like old cottage varieties, are easiest for insects to feed from <br />
        Remember to provide a night-time feast for moths; plant some night-scented flowers <br />
        Many herbs are highly attractive to insects, so add them into the mix, or design a dedicated herb garden</p>
      </div>
    </div>

    <div className="section">
      <h3 className="title is-4 has-text-centered">Choosing your Plants</h3>
      <NectarPlants />
    </div>

    <div className="section">
      <h3 className="title is-4 has-text-centered">Partners that Inspire Us</h3>
    </div>
    <a target="_blank" rel="noreferrer" href="https://www.beehotels.co.za/">
      <div className="card"> 
        <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1660165582/Screenshot_2022-08-10_at_21.58.58_j9ju9h.png' alt='Tutus Loco'></img>
      </div>
    </a>
  

    
  </div>
}

export default NectarCafe