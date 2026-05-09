import React from 'react'

import Header from '../../hero/header/index'
import FashionSwiperMd from '../../catagor-swiper';
import PremiumGrid from '../../bottomGrid/index';
import ValuesSection from '../../valueSection';
import VarsityGrid from '../../VarsityGrid';
import MobileFriendlySwiper from '../../moveCursorSwiper/index';
import Footer from '../../allFooter';


export default function Home() {
  return (
    <>
      <Header/>
      <FashionSwiperMd/>
      <PremiumGrid/>
      <MobileFriendlySwiper/>
      <VarsityGrid/>
      <ValuesSection/>
      <Footer/>
    </>
  )
}
