import React from 'react'
import NectarPlants from './NectarPlants'
import { Link } from 'react-router-dom'

function NectarCafe() {

  return <div className="box">
    <div className="section"> 
      <div className="section">
        <h1 className="title is-1 has-text-centered">
      Nectar Cafe
        </h1>
        <div className ="logo-image">
          <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1659869556/Project_Pollinator_qfrxk5-c_scale_h_350_mqijxw.png' alt="logo" />
        </div>   
        <br />
        <h2 className="title is-3 has-text-centered">Designing your Cafe</h2>
        <div>      
          <div className="box">
            <p className="subtitle is-5 has-text-centered">
        🔸 Choose a sheltered sunny spot 🔸 <br />
        🔸 Place plants in groups so that the colour and scent are easy to detect 🔸 <br />
        🔸 Select plants that you know have a show of flowers from early spring to late autumn 🔸<br />
        🔸 Remember to provide a night-time feast for moths, plant some night-scented flowers 🔸<br />
        🔸 Many herbs are highly attractive to insects, so add them into the mix, or design a dedicated herb garden 🔸</p>
          </div>
        </div>
      </div>


      <div className="section">
        <h3 className="title is-3 has-text-centered">Choosing your Plants</h3>        
        <NectarPlants />
        <div className="has-text-right">
          <button 
            className="button is-warning is-light"><Link
              to="/plants">🌺 See all Plants</Link></button>
        </div>        
      </div>

      <h2 className="title is-3 has-text-centered">Pollinator-Friendly Pest Control</h2>

      <section className="section">
        <div className="container"> 
          <div className="mb-6 columns is-multiline is-responsive">
            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://www.amazon.co.uk/Live-ladybirds-natural-pest-control-25/dp/B00YAT1IW6/ref=sr_1_5?keywords=live+ladybirds+uk&qid=1660304558&sprefix=live+ladybird%2Caps%2C72&sr=8-5">
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
                    {/* <div clasName="content">
      Ladybirds are pro Aphid-eaters. You might be wondering where you could get a good dozen of them to help out with an Aphid infestation. Amazon!
                    
                    </div> */}
                  </div>
                </div>
              </a>
            </div>

            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://pestpit.com/get-rid-of-gnats-with-apple-cider-vinegar/">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-1by1">
                      <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660305875/pexels-rosana-solis-3718457_mdkxlj.jpg" alt="Vinegar & Dishsoap" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Apple Cider Vinegar</p>
                      </div>
                    </div>
                    {/* <div className="content">
                Gnats will be attracted to the apple cider vinegar because of its sweet smell and taste.
                    
                    </div> */}
                  </div>
                </div>
              </a>
            </div>


            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://www.gardeningknowhow.com/edible/vegetables/vgen/using-decoy-trap-plants.htm">
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
                    {/* <div className="content">
                Trap crops are decoy plants to lure agricultural pests, away from the main crop affected by pests! Nasturtiums are amazing decoy plants!
                    
                    </div> */}
                  </div>
                </div>
              </a>
            </div>

            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://www.gardeningchannel.com/bee-friendly-garden-pest-control/">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-1by1">
                      <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660307356/pexels-gratisography-2259_hi3hri.jpg" alt="Hosepipe" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">H20 Blast</p>
                      </div>
                    </div>
                    {/* <div className="content">
                A quick burst of water from your water hose or its nozzle is usually forceful enough to put a stop to a light infestation of aphids on leaves. 
                    
                    </div> */}
                  </div>
                </div>
              </a>
            </div>


          </div>
        </div>
      </section>

      <h2 className="title is-3 has-text-centered">Companies that Inspire Us</h2>

      <section className="section">
        <div className="container">      
          <div className="mb-6 columns is-multiline is-responsive">     

            
            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://www.beehotels.co.za/">
                <div className="card"> 
                  <div className="card-image">
                    <figure className="image">                      
                      <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660165582/Screenshot_2022-08-10_at_21.58.58_j9ju9h.png" alt="Tutus Loco" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <strong>Tutus Loco</strong> - check out this family-run company which makes beautiful bee hotels for solitary bees. 
                        <a target="_blank" rel="noreferrer" href="https://www.beehotels.co.za/"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
            
            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://beehappyplants.co.uk/">
                <div className="card"> 
                  <div className="card-image">
                    <figure className="image">
                      <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660316318/Screenshot_2022-08-12_at_15.58.29_v8jzgy.png" alt="Bee Happy Plants" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <strong>Bee Happy Plants & Seeds</strong> - they sell organic seed kits designed to bring more pollinators to your yard!
                        <a target="_blank" rel="noreferrer" href="https://beehappyplants.co.uk/"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </a> 
            </div>


            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://www.meandthebees.com/">
                <div className="card"> 
                  <div className="card-image">
                    <figure className="image">
                      <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660377815/Screenshot_2022-08-13_at_09.03.27_zdwj4n.png" alt="Me & The Bees" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <strong>Me and The Bees</strong> - a lemonade company with the sweetest of stories!
                        <a target="_blank" rel="noreferrer" href="https://www.meandthebees.com/"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </a> 
            </div>

            <div className="column is-one-quarter-desktop is-responsive">
              <a target="_blank" rel="noreferrer" href="https://www.burtsbees.co.uk/">
                <div className="card"> 
                  <div className="card-image">
                    <figure className="image">
                      <img src="https://res.cloudinary.com/dlxbte5xh/image/upload/v1660378172/Screenshot_2022-08-13_at_09.09.25_kkc4na.png" alt="Burt's Bees" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <strong>Burts Bees</strong> - the funds they have poured into protecting bees is amazing!
                        <a target="_blank" rel="noreferrer" href="https://www.burtsbees.co.uk/"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </a> 
            </div>
          
            
          </div>
        </div>
      </section>
    </div>
  </div>
}

export default NectarCafe