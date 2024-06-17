import React, { useId, useState, useContext } from 'react';
import style from './styles/header.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { IMG_URL, IMG_URL_Local } from '../assets/constant';
import { GrLocation } from 'react-icons/gr';
import Cart from './Cart';
import { FilterContext } from '../context/filterContext';
import { loadProduct } from '../hooks/fetch';
import { TiArrowSortedDown } from 'react-icons/ti';
import Login from './components/Login.jsx'

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const { filter, setFilter } = useContext(FilterContext);
  const { categories } = loadProduct();
  const [user, setUser]=useState('')
  const [password, setPassword]=useState('')
  const [isLogin, setIsLogin]=useState(false)


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

      <Login user={user} 
      setUser={setUser} 
      password={password} 
      setPassword={setPassword} 
      isLogin={isLogin} 
      setIsLogin={setIsLogin}
      />

      <span>
        Returns <br />& Orders
      </span>
{
  isLogin ? <Cart /> : ""
}
      
    </div>
  );
};

export default Header;
