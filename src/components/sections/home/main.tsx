import HeadlineCard from '@/components/cards/headline-card'
import NewscardLandscape from '@/components/cards/newscard-landscape'
import NewsCardPortrait from '@/components/cards/newscard-portrait'
import GeneralCat from '@/components/category/general'
import HeadlineCat from '@/components/category/headline'
import TopnewsCat from '@/components/category/topnews'
import React from 'react'

const MainSection = () => {
  return (
    <section className="w-full lg:px-[15rem] lg:p-2 flex">
      <div className="lg:w-[70%] w-full">
        <TopnewsCat />
        <GeneralCat />
        <div className="w-full bg-red-200 lg:hidden">
          <HeadlineCat />
        </div>
      </div>

      <div className="w-full bg-red-400 ml-5 mt-10 px-1 max-lg:hidden">
        <HeadlineCat />
      </div>
    </section>
  )
}

export default MainSection