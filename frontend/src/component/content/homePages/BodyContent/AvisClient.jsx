import '../../../style/homePageCss/bodyCss/AvisClient.css';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import leftPicture from '../../../images/left-iterm.png'
import rigthPicture from '../../../images/rigth.png'
import userPicture from '../../../images/Ellipse 1.png'

function AvisClient() {
  return (
    <>
        <div className="container-avis">
            <div className="content-avis">
                <div className="title-iterm-avis">
                    <p>Voici ce que nos <br />
                        clients disent de nous
                    </p>
                </div>
                <div className="box-in-content">
                    
                        <div className="box-iterm">
                        <div className="iterm-swich-left">
                            <i><AiOutlineLeft /></i>
                        </div>
                        <div className="iterm-avis">
                            <div className="iterm-icons-left">
                                <img src={leftPicture} alt="" />
                            </div>
                            <div className='Client-display'>
                                <div className="box-avis">
                                    
                                    <div className="user-picture">
                                        <img src={userPicture} alt="" />
                                    </div>
                                    <div className="user-avis">
                                        <p>Cc chérie j'espère que tu vas. bien Vraiment merci beaucoup pour tes produits ça 
                                            faire des merveilles, je te contacterai très bientôt pour en prendre encore 
                                            passe une excellente journée 
                                        </p>
                                            <div className="user-name">
                                                <p>Elisa zoro, Client vérifié</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iterm-icons-rigth">
                                <img src={rigthPicture} alt="" />
                            </div>
                        </div>
                        <div className="iterm-swich-rigth">
                            <i><AiOutlineRight /></i>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            <div>
                <div className="titleBody">
                    <div className="left"></div>
                    <div className="title">
                        <p>Notre sélection la plus fine</p>
                    </div>
                    <div className="rigth"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AvisClient