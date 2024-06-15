import React, { useRef, useState } from 'react';
import style from './styles/sidebar.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useHandleScroll } from '../hooks/useHandleScroll';
import { data}  from '../assets/dataSidebat.jsx';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const {t, i18n}=useTranslation("sidebarTranslation")
  const { handleScroll, containerRef, ITEM_WIDTH } = useHandleScroll();
  const degradado = 'linear-gradient(rgba(255,255,255,0.2),rgb(255,255,255))';
  
  setTimeout(() => {
    handleScroll(ITEM_WIDTH);
  }, 4000);

  return (
    <div className={style.sidebar}>
      <div
        ref={containerRef}
        style={{
          height: '100%',
          width: '100vw',
          overflow: 'hidden',
          scrollBehavior: 'smooth',
        }}
      >
        <div className={style.content_box}>
          {data.map((d) => (
            <div
              key={d.name}
              className={style.card}
              style={{
                backgroundImage: `${degradado},url(${d.image})`,
              }}
            >
              <p>
              {t(`sidebar.${d.name}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.action_btns}>
        <button
          className={style.leftbtn}
          onClick={() => handleScroll(-ITEM_WIDTH)}
        >
          {' '}
          <FaAngleLeft />
        </button>
        <button
          className={style.rightbtn}
          onClick={() => handleScroll(ITEM_WIDTH)}
        >
          {' '}
          <FaAngleRight />{' '}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
