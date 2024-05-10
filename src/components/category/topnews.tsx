import React from 'react'
import NewsCardPortrait from '../cards/newscard-portrait'

const TopnewsCat = () => {
    return (
        <div className="bg-red-100 w-full shadow-sm mt-10 relative">
            <div className="w-full h-10 bg-emerald-500 flex items-center p-2 px-3">Top News</div>
            <div className="w-full h-full p-2 flex overflow-x-auto">
            <span className='w-[3rem] h-[3rem] flex justify-center items-center bg-white scale-95 cursor-pointer rounded-full text-sm absolute bottom-[40%] shadow-md left-2 z-0'>left</span>
            <span className='w-[3rem] h-[3rem] flex justify-center items-center bg-white scale-95 cursor-pointer rounded-full text-sm absolute bottom-[40%] shadow-md right-2 z-0'>right</span>
                <NewsCardPortrait />
                <NewsCardPortrait />
                <NewsCardPortrait />
                <NewsCardPortrait />
                <NewsCardPortrait />
                <NewsCardPortrait />
                <NewsCardPortrait />
                <NewsCardPortrait />
            </div>
        </div>
    )
}

export default TopnewsCat