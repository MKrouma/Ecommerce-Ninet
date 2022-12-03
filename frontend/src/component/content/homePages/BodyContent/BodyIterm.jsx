import '../../../style/homePageCss/bodyCss/body-iterm.css'
import AvisClient from './AvisClient'
import DetailsIterm from './DetailsIterm'
import SelectFine from './SelectFine'

function BodyIterm() {
  return (
    <>
      <div className="container-body">
        <div className="content">
          <div className="titleBody">
            <div className="left"></div>
            <div className="title">
              <p>Nos meilleures ventes</p>
            </div>
            <div className="rigth"></div>
          </div>

{/* *********************************card-iterm--1********************************************* */}
          <div className="content-prod">
            <div className="card-iterm--1">
              <div className="content-card">
                <div className="card-img">
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="card-info">
                  <div className='title-card'>
                    <p>Cheveux</p>
                  </div>
                  <div className="card-title-2">
                    <p>Masque capilaire restore</p>
                  </div>
                  <div className="englishTitle">
                    <p>Harmessing the growing power of onion</p>
                  </div>
                  <div className="price-iterm">
                    <p>12.000 xof</p>
                  </div>
                </div>
                <div className="btn-ajout">
                  <button>Ajouter au panier</button>
                </div>
              </div>
            </div>
            <div className="card-iterm--2">
              <div className="content-card">
                <div className="card-img--iterm-3">
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="card-info">
                  <div className='title-card'>
                    <p>Cheveux</p>
                  </div>
                  <div className="card-title-2">
                    <p>Masque capilaire restore</p>
                  </div>
                  <div className="englishTitle">
                    <p>Harmessing the growing power of onion</p>
                  </div>
                  <div className="price-iterm">
                    <p>12.000 xof</p>
                  </div>
                </div>
                <div className="btn-ajout">
                  <button>Ajouter au panier</button>
                </div>
              </div>
            </div>

{/* *********************************card-iterm--3********************************************* */}

            <div className="card-iterm--3">
              <div className="content-card">
                <div className="card-img--iterm-2">
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="card-info">
                  <div className='title-card'>
                    <p>Cheveux</p>
                  </div>
                  <div className="card-title-2">
                    <p>Masque capilaire restore</p>
                  </div>
                  <div className="englishTitle">
                    <p>Harmessing the growing power of onion</p>
                  </div>
                  <div className="price-iterm">
                    <p>12.000 xof</p>
                  </div>
                </div>
                <div className="btn-ajout">
                  <button>Ajouter au panier</button>
                </div>
              </div>
            </div>
          </div>
        </div>

 
{/* *********************************details********************************************* */}       
        <div>
            <DetailsIterm />
        </div>
        
      </div>
      <div>
        <AvisClient />
      </div>
      <div>
        <SelectFine />
      </div>
    </>
  )
}

export default BodyIterm