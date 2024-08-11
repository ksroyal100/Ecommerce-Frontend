import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/Men/men_kurta';
import { mensPantsPage1 } from '../../../data/pants/men_page1';
import { dressPage1 } from '../../../data/dress/page1';
import { gounsPage1 } from '../../../data/Gouns/gouns';
import { sareePage1 } from '../../../data/Saree/page1';


const HomePages = () => {
  return (
      <div >
      
      <MainCarousel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta" } />
        <HomeSectionCarousel data={mensPantsPage1} sectionName={"Men's Pants" } />
        <HomeSectionCarousel data={dressPage1} sectionName={"Ladies Kurti" } />
        <HomeSectionCarousel data={gounsPage1} sectionName={"Ladies Gouns" } />
        <HomeSectionCarousel data={sareePage1} sectionName={"Women's Saree" } />

        
      </div>
    </div>
    
  )
}

export default HomePages