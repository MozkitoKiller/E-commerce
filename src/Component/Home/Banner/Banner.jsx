import React from 'react';
import style from './Banner.module.css'
import img1 from '../../../assets/Hero.svg'

function Banner() {
  return (
    <div className={style.banner}>
      <img src={img1} alt="Hero" />

    </div>
  )
}

export default Banner;