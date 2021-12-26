import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

function Cart(props) {
  const cartCtx = useContext(CartContext)

  const totalAmount = cartCtx.totalAmount
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {}

  const cartItemAddHandler = (item) => {}

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>total amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
