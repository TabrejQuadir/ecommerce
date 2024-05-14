import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our NewsLetter & Stay Updated</p>
        <div>
            <input type='email' placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;