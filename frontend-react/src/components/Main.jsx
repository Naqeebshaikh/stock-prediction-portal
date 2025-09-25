import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas deleniti animi dignissimos. Perspiciatis perferendis soluta vitae officia adipisci, culpa quae tempore! Dolore iste vero cumque, totam facilis magni expedita tenetur quibusdam quae reprehenderit earum eos corrupti aperiam a voluptatibus perspiciatis repudiandae autem temporibus eum beatae, hic nostrum nisi? Quae laborum illo at dolor accusantium.</p>
         <Button text='Login' class='btn-outline-info'/>
      </div>
    </div>
    </>
  )
}

export default Main