import React from 'react'
import './Home.css'
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo'
import Chart from '../components/chart/Chart'
import { UserData } from '../dummyData'
import WidGetSm  from '../../src/components/widgetSm/WidGetSm'
import WidGetLg from '../../src/components/widgetLg/WidGetLg'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={UserData} title='User Analytics' grid dataKey='Active User'/>
      <div className="homeWidgets">
        <WidGetSm/>
        <WidGetLg/>
      </div>
    </div>
  )
}
