import '../../../style/homePageCss/headerCss/NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import HearderImg from './HearderImg';
import { Link } from 'react-router-dom';


function ContactNav() {
  return (
    <>
        <div className="navPosition">
            <div className='position'>
            <div className="NavContainer">
            <div className="title-site">
                <p>NINET</p>
            </div>
            <div className="content-rigth">
                <div className="Search-input">
                    <div className="content-input">
                        <input type="text" name="" id="" placeholder="recherche"/>
                    </div>
                    <div className="logo-input">
                        <BsSearch />
                    </div>
                </div>
                <div className="content-logo">
                     <i> <BiUser /> </i>
                     <i> <AiOutlineShoppingCart /> </i>
                </div>
            </div>
            

        </div>
        <div className="navBottom">
            <div className="itermLink">
                <Link className='linkClass' to="/"><span>Home</span></Link>
                <Link className='linkClass' to="/shop"><p>Shop</p></Link>
            </div>
            {/* <div className='itermSelect'>
                <div className="selectBrands">
                    <label >Brands</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div className="selectSkincare">
                    <label >Skincare</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div className="selectMakeup">
                    <label >Makeup</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div className="selectFragrances">
                    <label >Fragrances</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div className="selectHair">
                    <label >Hair</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div className="selectSales">
                    <label >Sales & Offres</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>

            </div> */}
            
            
                <div className="itermLink">
                    <Link className='linkClass' to="/contact"><p> contact</p></Link>
                </div>
            {/* <p>Mini Sizes</p> */}

        </div>
        </div>
        
        {/* <div>
            <HearderImg />
        </div> */}
        
        </div>
        
    </>
  )
}

export default ContactNav