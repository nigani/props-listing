import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  const { listing_id, url, MainImage, title, currency_code, price, quantity } = props.item;

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
        <img src={MainImage.url_570xN}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title.length<=50 ? title : title.substring(50)+'…'}</p>
        <p className="item-price">{currency_code === 'EUR' ? '€'+price : currency_code === 'USD' ? '$'+price : price+'P'}</p>
        <p className={"item-quantity level-" + (quantity<=10 ? "low" : quantity<=20 ? "medium" : "high" )}>{quantity} left</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
