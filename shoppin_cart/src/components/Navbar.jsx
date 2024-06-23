import React from 'react';
import style from './styles/navbar.module.css';
import { IoMenu } from 'react-icons/io5';

import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const {t, i18n}=useTranslation("navbarTranslation")

  const menu = [
    {
      id: 1,
      name:
      `${t('navbar.menu.medical')}`,
      
    },
    {
      id: 2,
      name: `${t('navbar.menu.best_seller')}`,
    },
    {
      id: 3,
      name: `${t('navbar.menu.basics')}`,
    },
    {
      id: 4,
      name: `${t('navbar.menu.releases')}`,
    },
    {
      id: 5,
      name: `${t('navbar.menu.music')}`,
    },
    {
      id: 6,
      name: `${t('navbar.menu.prime')}`,
    },
    {
      id: 7,
      name: `${t('navbar.menu.services')}`,
    },
    {
      id: 8,
      name: `${t('navbar.menu.deals')}`,
    },
    {
      id: 9,
      name: `${t('navbar.menu.foods')}`,
    },
    {
      id: 10,
      name: `${t('navbar.menu.home')}`,
    },
  ]; 

  return (
    <div className={style.navbar}>
      <div className={style.burguerBtn}>
        <IoMenu />
        <p>{t('navbar.menu.all')}</p>
      </div>
      <div className={style.navFill}>
        <ul>
          {menu.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      </div>

      <div className={style.btnEventContainer}>
        <button className={style.btnEvent}>
          {t('navbar.menu.event')}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
