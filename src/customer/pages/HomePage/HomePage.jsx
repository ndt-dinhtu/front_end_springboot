import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { Product_Ao } from '../../../data/Product_Ao'

export default function HomePage() {
    return (
        <div>
            <MainCarosel />
            <div >
                <HomeSectionCarosel data={Product_Ao} sectionName={"Men Kurta"} />
                <HomeSectionCarosel data={Product_Ao} sectionName={"Shose Men"} />
                <HomeSectionCarosel data={Product_Ao} sectionName={"Shose Women"} />
            </div>
        </div>
    )
}
