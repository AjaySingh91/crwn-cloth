import './cart-icon.style.scss'

// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import React from 'react'
import { ReactComponent as ShoppingIcon } from '../Assets/shoppping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.acction'
import { selectCartItemCount } from '../../redux/cart/cart.selector'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);