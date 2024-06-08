import React, { useId, useState, useContext } from 'react';
import style from './styles/header.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { IMG_URL, IMG_URL_Local } from '../assets/constant';
import { GrLocation } from 'react-icons/gr';
import Cart from './Cart';
import { FilterContext } from '../context/filterContext';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const { filter, setFilter } = useContext(FilterContext);

  const hadleChangeCategory = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const categoryFilterId = useId();

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={IMG_URL || IMG_URL_Local} alt='' />
      </div>

      <span className={style.ubication}>
        Deliver to{' '}
        <p>
          <GrLocation />
          Cuba
        </p>
      </span>

      <div className={style.search}>
        <div className={style.filter}>
          <select name='' id={categoryFilterId} onChange={hadleChangeCategory}>
            <option value='all'>All</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        <input
          type='text'
          onChange={(input) => setSearchInput(input.target.value)}
        />
        <IoSearchSharp />
      </div>

      <span>
        Hello, sign in <br />
        Acconunt & List
      </span>

      <span>
        Returns <br />& Orders
      </span>

      <Cart />
    </div>
  );
};

export default Header;
