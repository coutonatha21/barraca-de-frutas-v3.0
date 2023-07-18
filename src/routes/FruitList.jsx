import React from 'react';

import SearchBar from '../components/SearchBar';
import FruitCards from '../components/FruitCards';
import SmallButton from '../components/SmallButton';
import ModalOptions from '../components/ModalOptions';

const FruitList = () => {
  return (
    <>
      <SearchBar />
      <section className="menu">
        <FruitCards />
        <SmallButton />
        <ModalOptions />
      </section>
    </>
  );
};

export default FruitList;
