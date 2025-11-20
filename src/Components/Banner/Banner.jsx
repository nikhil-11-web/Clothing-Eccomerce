import React from 'react'

const Banner = () => {
  return (
    <section  >
      <div>
        <img className='h-[60vh] rounded-4xl left-0 mt-[14vh] bg-cover bg-top' src="https://i.pinimg.com/170x/25/4a/4e/254a4ed4ab4e71a8a7452e7a56e62d69.jpg" alt="" />
      </div>
      <div className='max-w-[1300px] mx-auto px-12 h-100 flex flex-col justify-center gap-3'>
        <h1 className='text-red-600 text-9xl uppercase font-bold tracking-tight'>Big Sale</h1>
        <h2 className='text-zinc-800 text-3xl uppercase'>Up to 50% off-Limited time only! </h2>
        <div className='text-6xl font-bold text-zinc-800 rflex gap-x3 mt-5'>
          <span className='text-white bg-zinc-800 p-3'>00</span>:
          <span className='text-white bg-zinc-800 p-3'>00</span>:
          <span className='text-white bg-zinc-800 p-3'>00</span>
        </div>
      </div>

    </section>
  )
}

export default Banner
