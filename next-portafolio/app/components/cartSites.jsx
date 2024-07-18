import React from 'react'
import styles from './CartSites.module.css'

const sites = [
	{
		name: 'ecommerce',
		image:'/AmazonClon.png',
		description: "sitio que realize en forma de practica, simulando una tienda online"
	},{
		name: 'chat',
		image:'/chat.png',
		description: `Chat en tiempo real, donde puede enviar y recibir mensajes tanto 
		en el canal general como a traves del privado`
	}
]

const CartSites = () => {
	return (
		<div className={styles.portafolio}>
			{
				sites.map((site)=> 
					<div key={site.name} className={styles.cartSite}> 
						<img src={site.image} alt={site.name}/> 
						<span>{site.description}</span>
					</div>)
			}
		</div>
	)
}

export default CartSites