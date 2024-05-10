"use client"
import Slideshow from '@/components/cards/slideshow'
import TopnewsCard from '@/components/cards/topnews-card'
import React, { useState } from 'react'

const HeroSection = () => {
    const [current, setCurrent] = useState(0)
    const data = [
        {
            header: "news headers 1",
            subheader: "the subheader of the news"
        },
        {
            header: "news 2",
            subheader: "the subheader of the news"
        },
        {
            header: "header 3",
            subheader: "the subheader of the news"
        },
    ]
    setTimeout(() => {
        if (current < 2 && current >= 0) {
            setCurrent(current + 1)
        } else {
            setCurrent(0)
        }
        console.log(current)
        console.log("first: ",getIndex(1))
        console.log("second: ", getIndex(2))
    }, 10000)

    function getIndex(i: number) {
        let result: number = current + i;
        if (current < 2 && current >= 0) {
            result = current + i
            if (result > 2) {
                result = 0
            }
        } else {
            result = -1 + i
        }
        // console.log(result)
        return result
    }
    return (
        <section className="w-full lg:px-[15rem] lg:p-2 mt-[3.5rem]">
            <div className="w-full flex mt-1 max-lg:flex-col">
                <Slideshow props={{...data[current]}} />
                <div className="w-[40rem] h-fit-content bg-red-300 rounded-md lg:ml-2 max-lg:mt-2 max-lg:flex max-lg:h-[10rem] max-lg:w-full">
                    <TopnewsCard props={{...data[getIndex(1)]}} />
                    <TopnewsCard props={{...data[getIndex(2)]}} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection