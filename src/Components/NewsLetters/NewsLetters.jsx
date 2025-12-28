import React from 'react'
import './NewsLetters.css'


const NewsLetters = () => {
  return (
    <div className='newsletter'>
      <h1> Get Exclusive Offers On your Email</h1>
      <p>Subscribe to our newslatter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id '/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetters
