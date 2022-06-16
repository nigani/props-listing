import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  const { listing_id, url, url_570xN, title, currency_code, price, quantity } =
    props.item;

//  const { url_570xN } = MainImage

  return (
    <div class="item">
     
      <div class="item-image">
        <a href={url}>
        <img src={"https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"}></img>
        </a>
      </div>
      <div class="item-details">
        <p class="item-title">{title}</p>
        <p class="item-price">{currency_code === 'EUR' ? '€'+price : currency_code === 'USD' ? '$'+price : price+'P'}</p>
        <p class="item-quantity level-medium">{quantity} left</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
