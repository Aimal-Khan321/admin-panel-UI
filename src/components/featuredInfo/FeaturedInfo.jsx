import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1,415</span>
            <span className="featuredMoneyRate">
                +2.4 <ArrowUpward className='featuredIcon positive'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
