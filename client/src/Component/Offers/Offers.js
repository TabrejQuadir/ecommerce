import './Offers.css'
import excluxve_image from "../Asset/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers_left'>
      <h1>Exclusive</h1>
      <h1>Offer For You</h1>
      <p>ONLY ON BEST SELLER PRODUCTS</p>
      <button>Check Now</button>
      </div>

      <div className='offer_right'>
        <img src={excluxve_image} alt='excluxve_image'/>
      </div>
        
    </div>
  )
}

export default Offers