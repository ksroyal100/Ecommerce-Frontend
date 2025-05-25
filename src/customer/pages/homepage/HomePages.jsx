import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/Men/men_kurta';
import { sareePage1 } from '../../../data/Saree/page1';


const HomePages = () => {
  return (
      <div >
      
      <MainCarousel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta" } />
        <HomeSectionCarousel data={sareePage1} sectionName={"Women's Saree" } />

        
      </div>
    </div>
    
  )
}

export default HomePages