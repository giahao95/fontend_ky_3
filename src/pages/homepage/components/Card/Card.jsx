import React from 'react';
import cl from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ item, src, link }) => {
  return (
    <div className={cl.card_container}>
      <Link className={cl.card_link} to={`/productdetail/${item._id}`}>
        <span className={cl.card_mask}>
          <img className={cl.card_img} src={src} alt={item.name} />
          <div className={cl.card_info}>
            <h6 className={cl.card_title}>{item.name}</h6>
            <div className={cl.card_price}>{item.price}₫</div>
          </div>
        </span>
      </Link>
    </div>
  );
};

export default Card;
