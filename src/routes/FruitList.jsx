import React, { useState } from 'react'

import SearchBar from '../components/SearchBar'
import FruitCards from '../components/FruitCards'
import SmallButton from '../components/SmallButton'
import ModalOptions from '../components/ModalOptions'

const FruitList = () => {

  const [OptModal, setOptModal] = useState(false)

  return (

    <>
      <SearchBar />

      <section className='menu'>
        <FruitCards
          options={() => setOptModal(true)} />
        <SmallButton />
        <ModalOptions
          IsOpen={OptModal} />
      </section>
    </>
  )

}

export default FruitList