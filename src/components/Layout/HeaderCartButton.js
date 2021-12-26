import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'

import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)

  const numberOfCartContext = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartContext}</span>
    </button>
  )
}

export default HeaderCartButton
