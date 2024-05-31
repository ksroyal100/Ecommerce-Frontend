import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'

const HomePages = () => {
  return (
      <div >
      
      <MainCarousel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel sectionName={"Men's Kurta" } />
        <HomeSectionCarousel sectionName={"Men's Shoes" } />
        <HomeSectionCarousel sectionName={"Men's Shirt" } />
        <HomeSectionCarousel sectionName={"Women's Saree" } />
        <HomeSectionCarousel sectionName={"Women's Dress" } />

        
      </div>
    </div>
    
  )
}

export default HomePages