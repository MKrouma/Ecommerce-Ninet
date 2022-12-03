import { HiOutlineArrowRight } from 'react-icons/hi';

function ShopImg() {
  return (
    <>
        <div className="ShopImg">
            <div className="container-box">
                <div className="card-iterm-img-shop">
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

export default ShopImg