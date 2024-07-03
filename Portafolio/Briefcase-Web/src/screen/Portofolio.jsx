import React from 'react'
import style from './Portofolio.module.css'

export const Portofolio = () => {
  return (
    <div className={style.portofolio} name="Portofolio">
      <div className={style.cartEcommerce}>
        <img src="/AmazonClon.png" alt="" />
        <span>sitio que realize en forma de practica, simulando una tienda online</span>
      </div>

      <div className='chat'>
        <img src="" alt="" />
        <span>Chat en tiempo real, donde puede enviar y recibir mensajes tanto en el canal general como a traves del privado</span>
      </div>
      
      <div className='chat'>
        <img src="" alt="" />
        <span>Chat en tiempo real, donde puede enviar y recibir mensajes tanto en el canal general como a traves del privado</span>
      </div>
    </div>
  )
}
