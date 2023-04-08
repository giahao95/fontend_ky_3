import React from 'react';
import cl from './Card.module.css';

const Card = ({ item, src, link }) => {
	return (
		<div className={cl.card_container}>
			<a className={cl.card_link} href={link}>
				<span className={cl.card_mask}>
					<img className={cl.card_img} src={src} alt={item.name} />
					<div className={cl.card_info}>
						<h6 className={cl.card_title}>{item.name}</h6>
						<div className={cl.card_price}>{item.price}₫</div>
					</div>
				</span>				
			</a>
		</div>
	);
};

export default Card;