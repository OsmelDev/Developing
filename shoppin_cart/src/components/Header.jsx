import React, { useId, useState, useContext } from 'react';
import style from './styles/header.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { IMG_URL, IMG_URL_Local } from '../assets/constant';
import { GrLocation } from 'react-icons/gr';
import Cart from './Cart';
import { FilterContext } from '../context/filterContext';
import { loadProduct } from '../hooks/fetch';
import { TiArrowSortedDown } from 'react-icons/ti';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const { filter, setFilter } = useContext(FilterContext);
  const { categories } = loadProduct();

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

      <div className={style.containerFilterSearch}>
        <div className={style.filter}>
          <select name='' id={categoryFilterId} onChange={hadleChangeCategory}>
            <option value='all'>All </option>
            {categories.map((category, i) => (
              <option key={i} value={category}>{category} </option>
            ))}
          </select>
        </div>

        <div className={style.searchContainer}>
          <input
            type='text'
            onChange={(input) => setSearchInput(input.target.value)}
          />
          <button>
            <IoSearchSharp />
          </button>
        </div>
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
