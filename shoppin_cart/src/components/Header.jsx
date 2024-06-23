import React, { useId, useState, useContext, useEffect } from 'react';
import style from './styles/header.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { IMG_URL, IMG_URL_Local } from '../assets/constant';
import { GrLocation } from 'react-icons/gr';
import Cart from './Cart';
import { FilterContext } from '../context/filterContext';
import en from '../assets/images/en.svg';
import es from '../assets/images/es.svg';
import { useTranslation } from 'react-i18next';
import { getCoutryUser, loadProduct } from '../hooks/fetch';
import { TiArrowSortedDown } from 'react-icons/ti';
import Login from './components/Login.jsx'

const Header = () => {
  const { t, i18n } = useTranslation('global');
  const [searchInput, setSearchInput] = useState('');
  const { filter, setFilter } = useContext(FilterContext);
  const { categories } = loadProduct();
  const [user, setUser]=useState('')
  const [password, setPassword]=useState('')
  const [isLogin, setIsLogin]=useState(false)
  const {country}= getCoutryUser()


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

      <span className={style.ubication} >
       {t('header.ubication')}
       <p>
          <GrLocation />
          {country}
       </p>
      </span>

      <div className={style.containerFilterSearch}>
        <div className={style.filter}>
          <select name='' id={categoryFilterId} onChange={hadleChangeCategory}>
            <option value='all'>{t('header.categories.all')} </option>
            <option value='electronics'>
              {t('header.categories.electronics')}{' '}
            </option>
            <option value='jewelery'>{t('header.categories.jewelery')} </option>
            <option value="men's clothing">
              {t("header.categories.clothing.men's")}{' '}
            </option>
            <option value="women's clothing">
              {t("header.categories.clothing.women's")}{' '}
            </option>           
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

     

      <div className={style.languajeSelectorContainer}>
        <div id={style.languajeSelector}>
          <span className={style.languaje}
            onClick={() => i18n.changeLanguage('es')}>
            <img src={es} /> es{' '}
          </span>

          <span
            className={style.languaje}
            onClick={() => i18n.changeLanguage('en')}>
            <img src={en} /> en{' '}
          </span>
        </div>
      </div>

 <Login user={user} 
      setUser={setUser} 
      password={password} 
      setPassword={setPassword} 
      isLogin={isLogin} 
      setIsLogin={setIsLogin}
      />


      <div className={style.infoContainer}>
        <p>{t('header.orders.returns')}</p>
        <p>{t('header.orders.orders')}</p>
      </div>
{
  isLogin ?  <Cart /> : ''
}

    </div>
  );
};

export default Header;