import React from 'react';
import style from './styles/screen.module.css';
import { useResult } from '../hooks/useResult';
import { loadProduct } from '../hooks/fetch';
import { useTranslation } from 'react-i18next';

const Screen = () => {
  const {t, i18n} = useTranslation('screenTranslation')
  const { getLocalResult } = useResult();
  const { localProducts } = loadProduct();

  return (
    <div className={style.screen}>
      <ul className={style.containerProducts}>
        {getLocalResult(localProducts)}
      </ul>

      <div className={style.footerScreen}>
        <div className={style.siginContainer}>
          <p>{t('screen.footer.title')}</p>
          <button className={style.signinButton}>{t('screen.footer.button')}</button>
          <p>{t('screen.footer.register.costomer')} <a href="#">{t('screen.footer.register.start')}</a></p>
        </div>

        <div className={style.goToTopButton}>
          <p>{t('screen.footer.back')}</p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
