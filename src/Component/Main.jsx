import React from 'react'
import Left from './Left'
import Right from './Right'

function Main() {
  return (
    <>
      <div className='md:h-screen'>
        <div className="flex flex-col md:flex-row ">
          <div className="md:flex-1"><Left /></div>
          <div className="md:flex-1"> <Right /></div>
        </div>
        <footer className='text-center'>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/SajadiaHouse">SajadiaSofteare</a>.
          </p>
        </footer>
      </div>


    </>
  )
}

export default Main