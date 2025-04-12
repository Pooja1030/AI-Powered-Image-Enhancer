import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

const Home = () => {
  return (
    <div className='w-full'>
      <ImageUpload />
      <ImagePreview />
    </div>
  )
}

export default Home
