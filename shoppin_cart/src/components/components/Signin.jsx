import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './styles/signin.module.css'

export function Signin (){
	const {t, i18n} = useTranslation('screenTranslation');

	return (
		<div className={style.siginContainer}>
      <p>{t('screen.footer.title')}</p>
      <button className={style.signinButton}>{t('screen.footer.button')}</button>
      <p>{t('screen.footer.register.costomer')}
       <a href="#">
       	{t('screen.footer.register.star')}
       </a>
      </p>
    </div>
	)
}

