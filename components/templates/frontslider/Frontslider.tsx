import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'http://savagevaran.com/wp-content/uploads/2023/08/varan_top_slider01.jpg',
    caption: ''
  },
  {
    url: 'http://savagevaran.com/wp-content/uploads/2023/08/varan_top_slider02.jpg',
    caption: ''
  },
  {
    url: 'http://savagevaran.com/wp-content/uploads/2023/08/varan_top_slider03.jpg',
    caption: ''
  },
  {
    url: 'http://savagevaran.com/wp-content/uploads/2023/08/varan_top_slider04.jpg',
    caption: ''
  },
];

const FrontSlider = () => {
  return (
    <div className="slide-container mt-10">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} alt="Slider"/>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default FrontSlider