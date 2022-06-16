import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.js';

export default function Listing(props) {
  const { items } = props;
    return (
      <div className="item-list">
        {items.map((item) => (
          <Item item={item} key={item.listing_id} />
        ))}
      </div>
    );
  }

Listing.propTypes = {
  items: PropTypes.array.isRequired,
};
