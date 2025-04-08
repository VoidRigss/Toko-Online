import { faCheck, faHandHoldingDollar, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const About = () => {
  return (
    <div className='py-20 px-25 bg-gray-300'>
      <h1 className='text-3xl text-center font-extrabold mb-10'>Tentang Kami</h1>
      <div className='inline-grid gap-10'>
        <p className='text-justify'> Selamat Datang di <i className='bg-black text-white px-2 font-bold'>store<i className='text-blue-600'>Phone</i></i>
        <b> ,</b> tempatt terbaik untuk membeli Smartphone Baru ataupun second yang sangat berkualitas, harga yang terjangkau, punya 
        banyak pilihan dari berbagai brand dan tipe smartphone. Kami juga melayani jual beli secara ofline, jika anda ingin membeli secara ofline atau secara langsung, maka datang saja ke Kecamatan Sukorejo, Kabupaten Kendal, Jawa Tengah.
        </p>
        <div className='flex gap-20 justify-center'>
          {/* Harga Sahabat */}
          <div className='h-40 w-40 bg-gray-400 text-center pt-9 px-3 border-2 border-none rounded-3xl '  >
            <FontAwesomeIcon 
            icon={faHandHoldingDollar}
            className='text-5xl text-neutral-900'
            />
            <p className='text-neutral-900 pt-2'>Harga Bersahabat</p>
          </div>

          {/* Kualitas Terbaik */}
          <div className='h-40 w-40 bg-gray-400 text-center pt-9 px-3 border-2 border-none rounded-3xl '  >
            <FontAwesomeIcon 
            icon={faWebAwesome}
            className='text-5xl text-neutral-900'
            />
            <p className='text-neutral-900 pt-2'>Kualitas Terbaik</p>
          </div>
          
          {/* Garanasi Terpercaya  */}
          <div className='h-40 w-40 bg-gray-400 text-center pt-9 px-3 border-2 border-none rounded-3xl '  >
            <FontAwesomeIcon 
            icon={faCheck}
            className='text-5xl text-neutral-900'
            />
            <p className='text-neutral-900 pt-2'>Garanasi Terpercaya</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;


