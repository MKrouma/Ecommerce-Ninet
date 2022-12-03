import imageContact from '../../../images/imageContact.png'
import '../../../style/ContactPageCss/ContactBody.css'

function ContactBody() {
  return (
    <>
        <div className="containerContact">
            <div className="contentForm">
                <div className="formCenter">
                    <div className="titleContact">
                    <p>Prendre contact</p>
                    </div>
                    <div className="paragraphe">
                        <p>Vous pouvez nous laisser un message ou nous appeler.</p>
                    </div>
                    <div className="formContact">
                        <form >
                            <div className="userProfil">
                                <div className="formNameuser">
                                    <p>Name</p>
                                    <input type="text" value="" placeholder="nom"/>
                                </div>
                                <div className="formNameuser">
                                    <p>Prenom</p>
                                    <input type="text" placeholder="Prenom"/>
                                </div>
                            </div>
                            
                            <div className="formName">
                                <p>Email</p>
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="formName">
                                <p>Numero</p>
                                <input type="number" placeholder="+225 0707070707"/> 
                            </div>
                            <div className="formName">
                                <p>Message</p>
                                <input type="text" placeholder="Message..."/>
                            </div>
                            <div className="CheckboxContent">
                                <input type="checkbox" name="" id="" /><span>Vous acceptez notre politique de confidentialité.</span>
                            </div>
                            <div className="buttonSubmit">
                                <button>Envoyer le message</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="contentImgForm">
                <img src={imageContact}alt="" />
            </div>
        </div>
    </>
  )
}

export default ContactBody