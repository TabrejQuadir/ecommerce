import './Hero.css';
import hand_icon from '../Asset/hand_icon.png'
import arrow_icon from '../Asset/arrow.png'
import hero_image from "../Asset/hero_image.png"
const Hero = () => {
    return (
        

        <div className='hero'>

            <div className='hero_left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero_hand_icon'>
                        <p>new</p>
                        <img src={hand_icon} alt='hand_icon' />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>

                <div className='hero_latest-button'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt='' />
                </div>
            </div>


            <div className='hero_right'>
                <img src={hero_image} alt='hero_image' />
            </div>

        </div>
    )
}

export default Hero