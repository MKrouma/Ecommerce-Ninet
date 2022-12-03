import '../../../style/homePageCss/footerCss/FooterBody.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

function FooterBody() {
  return (
    <>
    <div className="container-footer--iterm">
         <div className="containerFooter">
            
            <div className="ninet-info">
                <div className="titlePage">
                    <p>NINET</p>
                </div>
                <div className="ninet--info-iterm">
                    <p>Nous vous informerons de nos <br />
                    nouvelles offres et promotions !</p>
                </div>   
                <div className="input-adhesion">
                    <div className="inputAdhesion">
                        <input type="text" placeholder='Entre votre Email'/>
                        <button>Adhésion</button>
                    </div>
                </div>
            </div>
            <div className="shop--info">
                <div className="infoleft-iterm">
                    <div className='title-iterm-info'>
                        <p>Shop</p>
                    </div>
                    <div className='paragraphe-footer'>
                        <p>Featured <br />
                        Best Sellers <br />
                        Cart <br />
                        My accountt</p>
                        
                    </div>
                    
                </div>
                <div className="infoRigth-iterm">
                    <div className='title-iterm-info'>
                        <p>Skin Types</p>
                    </div>
                    <div className='paragraphe-footer'>
                        <p>All skin types <br />
                            Sensitive skin<br />
                            Oily skin<br />
                            Acne et Blemishes</p>
                        
                    </div>
                </div>
            </div>
            <div className="link-pub">
                <div className="iconsFacebook">
                    <i><BsFacebook /></i>
                </div>
                <div className="iconsInstagram">
                    <i><AiFillInstagram /></i>
                </div>
            </div>
            
        </div>
        <div className="content-copy">
            <div className="copyRigth">
                <p>Copyright 2022 © NinetShop </p>
            </div>
            
            <div className="general-content">
                <div> <p>Privacy</p></div>
                <div> <p>Service</p></div>
                <div> <p>Term and condition</p></div>
            </div>
        </div>
    </div>
       
    
    </>
  )
}

export default FooterBody