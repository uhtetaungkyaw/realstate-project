import React from 'react'
import Mainvisual from '../component/Mainvisual'
import Helppeople from '../component/Helppeople'
import Card1 from '../component/Card1'

const Home = () => {
  return (
    <>
      <Mainvisual />
      <main>
        <Card1 />
        <Helppeople />
      </main>
    </>
  )
}

export default Home