import React from 'react'
import Sliders from '../../components/Slider/Slider'
import Brands from '../../components/Brands/Brands'
import Conference from '../../components/Conference/Conference'
import ConferenceList from '../../components/ConferenceList/ConferenceList'

function Home() {
  return (
    <div>
      <Sliders/>
      <Brands/>
      <Conference/>
      <ConferenceList/>
    </div>
  )
}

export default Home