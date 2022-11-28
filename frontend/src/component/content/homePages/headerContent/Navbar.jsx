import '../../../style/homePageCss/headerCss/NavBar.css';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineArrowRight } from 'react-icons/hi';

function Navbar() {
  return (
    <>
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
                <span>Home</span>
                <p>Shop</p>
            </div>
            <div className='itermSelect'>
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

            </div>
            <div className="itermLink">
                <p>Mini Sizes</p>
                <p> contact</p>
            </div>

        </div>
        <div className="headerImg">
            <div className="container-box">
                <div className="card-iterm-img">
                    <p>Des remèdes naturels <br />
                    issus du patrimoine,<br />
                    renforcés par la science.</p>
                </div>
                <div className="btn-img-iterm">
                    <button>consultez notre stock <i><HiOutlineArrowRight /></i></button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar