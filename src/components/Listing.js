import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.js';
import { nanoid } from 'nanoid';

export default function Listing(props) {
  const { items } = props;
    return (
      <div className="item-list">
        {items.map((item) => (
          <Item item={item} key={nanoid()} />
        ))}
      </div>
    );
  }

Listing.propTypes = {
  items: PropTypes.array.isRequired,
};