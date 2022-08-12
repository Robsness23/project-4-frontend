import React from 'react'
import NectarPlants from './NectarPlants'
import { Link } from 'react-router-dom'

function NectarCafe() {

  return <div className="section"> 
    <h1 className="title is-1 has-text-centered">
      Nectar Cafe
    </h1>
    <hr />
    <h2 className="title is-3 has-text-centered">Designing your Cafe</h2>
    <div>      
      <p className="subtitle is-5 has-text-centered">
        🔸 Choose a sheltered sunny spot 🔸 <br />
        🔸 Place plants in groups so that the colour and scent are easy to detect 🔸 <br />
        🔸 Select plants that you know have a show of flowers from early spring to late autumn 🔸<br />
        🔸 Remember to provide a night-time feast for moths, plant some night-scented flowers 🔸<br />
        🔸 Many herbs are highly attractive to insects, so add them into the mix, or design a dedicated herb garden 🔸</p>
    </div>
    <div className="section">
      <h3 className="title is-3 has-text-centered">Choosing your Plants</h3>
      <NectarPlants />
      <div className="has-text-right">
        <button 
          className="button is-warning is-light"><Link
            to="/plants">🌺 All Plants</Link></button>
      </div>
    </div>

    <h2 className="title is-3 has-text-centered">Pollinator-Friendly Pest Control</h2>

    <section className="section">
      <div className="container">        
        <div className="mb-6 columns is-multiline">
          <div className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
            <div className="card">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660303363/pexels-lisa-passov-12772980_nxbzhk.jpg" alt="Ladybird" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Ladybirds</p>
                  </div>
                </div>
                <div clasName="content">
      Ladybirds are pro Aphid-eaters. You might be wondering where you could get a good dozen of them to help out with an Aphid infestation. Amazon!
                  <a target="_blank" rel="noreferrer" href="https://www.amazon.co.uk/Live-ladybirds-natural-pest-control-25/dp/B00YAT1IW6/ref=sr_1_5?keywords=live+ladybirds+uk&qid=1660304558&sprefix=live+ladybird%2Caps%2C72&sr=8-5"><br /> Live Ladybirds</a>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
            <div className="card">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660305875/pexels-rosana-solis-3718457_mdkxlj.jpg" alt="Vinegar & Dishsoap" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Apple Cider Vinegar Solution</p>
                  </div>
                </div>
                <div className="content">
                Gnats will be attracted to the apple cider vinegar because of its sweet smell and taste.
                  <a target="_blank" rel="noreferrer" href="https://pestpit.com/get-rid-of-gnats-with-apple-cider-vinegar/"><br /> Instructions</a>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
            <div className="card">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1659194791/pexels-jeffry-surianto-8974474_cpr9eu.jpg" alt="Nasturtium" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Decoy Trap Plants</p>
                  </div>
                </div>
                <div className="content">
                Trap crops are decoy plants to lure agricultural pests, away from the main crop affected by pests! Nasturtiums are amazing decoy plants!
                  <a target="_blank" rel="noreferrer" href="https://www.gardeningknowhow.com/edible/vegetables/vgen/using-decoy-trap-plants.htm"><br /> Read more here</a>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
            <div className="card">
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660307356/pexels-gratisography-2259_hi3hri.jpg" alt="Hosepipe" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">A H20 Blast</p>
                  </div>
                </div>
                <div className="content">
                A quick burst of water from your water hose or its nozzle is usually forceful enough to put a stop to a light infestation of aphids on leaves. 
                  <a target="_blank" rel="noreferrer" href="https://www.gardeningchannel.com/bee-friendly-garden-pest-control/"><br /> Find out more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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